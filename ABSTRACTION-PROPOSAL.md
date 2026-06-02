# Logger Abstraction Proposal: FormattingStrategy + TransportingStrategy + Presets

## Current Architecture

```
LoggerStrategy (interface)
├── LoggerStrategyVoid (no-op, ignores everything)
└── LoggerStrategyConsole
    └── uses ConsoleLogStrategy (interface)
        ├── ConsoleLogStrategySimple       — formats human-readable, transports via console.*
        ├── ConsoleLogStrategyNewRelicJson — formats JSON, transports via console.log
        └── ConsoleLogStrategyPino         — formats pino-style, transports via pino Logger
```

### The Problem: Format and Transport Are Coupled

Each `ConsoleLogStrategy` implementation does **two unrelated things** inside a single `log()` method:

1. **Formatting** — how the raw `...msgs` are structured/serialized (ISO string, JSON object, pino log object)
2. **Transporting** — where the formatted output goes (`console.log`, `pino()`, etc.)

| Issue | Example |
|---|---|
| **Can't mix format + transport** | Can't send JSON over pino's transport without writing a whole new class |
| **Duplicated logic** | `_joinDefined()`, payload extraction, message formatting duplicated across all 3 strategies |
| **Misleading naming** | `ConsoleLogStrategyPino` doesn't use `console` at all — pino writes to stdout |
| **No custom transport** | Adding HTTP/file/syslog requires reimplementing formatting |
| **No custom format** | Adding Datadog/CloudWatch format requires reimplementing transport |

### What Each Strategy Actually Does

| Strategy | Format | Transport |
|---|---|---|
| `ConsoleLogStrategySimple` | `"ISO - LEVEL: prefix" msgs` | `console.error/warn/info/log` |
| `ConsoleLogStrategyNewRelicJson` | `{ meta, logtype, timestamp, message }` JSON | `console.log` (always) |
| `ConsoleLogStrategyPino` | pino `{ ...meta, time }` + message string | `pino()` logger instance |
| `LoggerStrategyVoid` | none | none |

---

## Proposed Architecture

Remove the `ConsoleLogStrategy` layer entirely. Replace it with two independent strategy interfaces — `FormattingStrategy` and `TransportingStrategy` — and expose **presets** that combine them into ready-to-use `LoggerStrategy` implementations.

```
LoggerStrategy (interface) — unchanged
│
├── LoggerStrategyPresetConsoleSimpleString  — preset: SimpleStringFormat + ConsoleTransport
├── LoggerStrategyPresetConsoleJson          — preset: JsonFormat + ConsoleTransport
├── LoggerStrategyPresetVoid                 — silent / no-op
├── LoggerStrategyPresetPino                 — preset: PinoFormat + PinoTransport
│
└── LoggerStrategyBase (for custom composition)
    └── accepts any FormattingStrategy + TransportingStrategy
```

### The Three Layers

```
┌─────────────────────────────────────────────────┐
│  LoggerStrategy (interface)                      │  What consumers see
│  debug(), info(), warn(), error(), clone()       │
└───────────────────────┬─────────────────────────┘
                        │
          ┌─────────────┴──────────────┐
          ▼                            ▼
┌─────────────────────┐    ┌──────────────────────┐
│  FormattingStrategy │    │  TransportingStrategy │  Internal composition
│  format()           │    │  transport()          │
└─────────────────────┘    └──────────────────────┘
```

| Concern | Interface | Owns | Does NOT own |
|---|---|---|---|
| **Level gating** | `LoggerStrategy` | "Should this be logged?" | Formatting, transport |
| **Formatting** | `FormattingStrategy` | "What shape is the log entry?" | Where it goes |
| **Transporting** | `TransportingStrategy` | "Where does it go?" | What it looks like |

---

## Core Interfaces

### FormattedLog (shared type)

```typescript
export type FormattedLog = {
  level: LogLevel
  timestamp: number              // epoch ms
  message: string                // primary message string
  prefix?: string
  meta?: ObjectType              // user-provided metadata
  extra?: Record<string, unknown> // additional structured fields from msg objects
}
```

### FormattingStrategy

```typescript
export interface FormattingStrategy {
  format(
    params: {
      level: LogLevel
      meta?: ObjectType
      datetime?: Date
      prefix?: string
    },
    ...msgs: unknown[]
  ): FormattedLog[]
}
```

### TransportingStrategy

```typescript
export interface TransportingStrategy {
  transport(log: FormattedLog): void
}
```

---

## Formatting Implementations

### SimpleStringFormat

Human-readable output like `"2026-06-01T12:00:00.000Z - ERROR: [my-app] Something went wrong"`.

```typescript
export class FormattingStrategySimpleString implements FormattingStrategy {
  format(
    params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string },
    ...msgs: unknown[]
  ): FormattedLog[] {
    const { level, meta, prefix, datetime = new Date() } = params

    if (msgs.length === 0) {
      return [{ level, timestamp: datetime.getTime(), message: prefix ?? '', prefix, meta }]
    }

    return msgs.map((msg) => ({
      level,
      timestamp: datetime.getTime(),
      message: this._formatMsg(msg, prefix),
      prefix,
      meta,
    }))
  }

  protected _formatMsg(msg: unknown, prefix?: string): string {
    const parts = [prefix]
    if (typeof msg === 'string') parts.push(msg)
    else if (msg != null) parts.push(JSON.stringify(msg))
    return parts.filter(Boolean).join(' ')
  }
}
```

### JsonFormat

Structured JSON output — replaces `ConsoleLogStrategyNewRelicJson`.

```typescript
export class FormattingStrategyJson implements FormattingStrategy {
  format(
    params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string },
    ...msgs: unknown[]
  ): FormattedLog[] {
    const { level, meta, prefix, datetime = new Date() } = params

    return msgs.map((msg) => {
      const { message, ...extra } = this._extractPayload(msg, prefix)
      return { level, timestamp: datetime.getTime(), message, prefix, meta, extra }
    })
  }

  protected _extractPayload(msg: unknown, prefix?: string): { message: string; [key: string]: unknown } {
    if (!msg) return { message: '' }
    if (typeof msg === 'object') {
      const { message, ...rest } = msg as { message?: string; [key: string]: unknown }
      return { ...rest, message: this._joinDefined(prefix, message) }
    }
    if (typeof msg === 'string') return { message: this._joinDefined(prefix, msg) }
    return { message: '' }
  }

  protected _joinDefined(prefix?: string, msg?: string): string {
    return [prefix, msg].filter(Boolean).join(' ')
  }
}
```

### PinoFormat

Pino-compatible formatting — outputs a JSON log object + separate message string.

```typescript
export class FormattingStrategyPino implements FormattingStrategy {
  format(
    params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string },
    ...msgs: unknown[]
  ): FormattedLog[] {
    const { level, meta, prefix, datetime = new Date() } = params

    return msgs.map((msg) => ({
      level,
      timestamp: datetime.getTime(),
      message: this._formatMessage(msg, prefix),
      prefix,
      meta,
    }))
  }

  protected _formatMessage(msg: unknown, prefix?: string): string {
    if (!msg) return prefix ?? ''
    if (typeof msg === 'object') {
      const { message } = msg as { message?: string }
      return this._joinDefined(prefix, message ?? JSON.stringify(msg))
    }
    if (typeof msg === 'string') return this._joinDefined(prefix, msg)
    return this._joinDefined(prefix, String(msg))
  }

  protected _joinDefined(prefix?: string, msg?: string): string {
    return [prefix, msg].filter(Boolean).join(' ')
  }
}
```

---

## Transporting Implementations

### ConsoleTransport

Maps log level to the appropriate `console.*` method.

```typescript
export class TransportingStrategyConsole implements TransportingStrategy {
  transport(log: FormattedLog): void {
    const fn = this._levelToFn(log.level)
    const ts = new Date(log.timestamp).toISOString()

    /* eslint-disable no-console */
    fn(`${ts} - ${log.level}: ${log.message}`)
    if (log.meta) fn(log.meta)
    if (log.extra && Object.keys(log.extra).length > 0) fn(log.extra)
    /* eslint-enable no-console */
  }

  protected _levelToFn(level: LogLevel): (...args: unknown[]) => void {
    switch (level) {
      case LogLevel.ERROR: return console.error
      case LogLevel.WARN:  return console.warn
      case LogLevel.INFO:  return console.info
      case LogLevel.DEBUG: return console.log
      default: throw typeUtil.exhaustiveError(`Unknown level [${level}]`, level)
    }
  }
}
```

### StreamTransport

Generic Node.js writable stream — stdout, file, etc.

```typescript
export class TransportingStrategyStream implements TransportingStrategy {
  constructor(protected _stream: NodeJS.WritableStream) {}

  transport(log: FormattedLog): void {
    this._stream.write(JSON.stringify(log) + '\n')
  }
}
```

### PinoTransport

Uses pino's `Logger` instance for transport — lets pino handle its own output formatting, destinations, and transports.

```typescript
export class TransportingStrategyPino implements TransportingStrategy {
  protected _logger: Logger

  constructor(logger?: Logger) {
    this._logger = logger ?? pino()
  }

  transport(log: FormattedLog): void {
    const fn = this._logger[this._levelToFn(log.level)]
    const { message, meta, timestamp, ...rest } = log
    fn({ ...meta, time: timestamp, ...rest }, message)
  }

  protected _levelToFn(level: LogLevel): 'error' | 'warn' | 'info' | 'debug' {
    switch (level) {
      case LogLevel.ERROR: return 'error'
      case LogLevel.WARN:  return 'warn'
      case LogLevel.INFO:  return 'info'
      case LogLevel.DEBUG: return 'debug'
      default: throw typeUtil.exhaustiveError(`Unknown level [${level}]`, level)
    }
  }
}
```

### VoidTransport

Silent — drops everything.

```typescript
export class TransportingStrategyVoid implements TransportingStrategy {
  transport(_log: FormattedLog): void {}
}
```

---

## Presets

Presets are concrete `LoggerStrategy` implementations that come pre-wired with the right `FormattingStrategy` + `TransportingStrategy`. They are what most consumers will use directly.

### LoggerStrategyPresetConsoleSimpleString

The default "just log to console with a human-readable format" preset.

```typescript
import { FormattingStrategySimpleString } from '#src/logger-strategy/formatting-strategy/simple-string.js'
import { TransportingStrategyConsole } from '#src/logger-strategy/transporting-strategy/console.js'

export class LoggerStrategyPresetConsoleSimpleString extends LoggerStrategyBase {
  constructor(params?: LoggerStrategyParams) {
    super({
      ...params,
      formattingStrategy: new FormattingStrategySimpleString(),
      transportingStrategy: new TransportingStrategyConsole(),
    })
  }
}
```

### LoggerStrategyPresetConsoleJson

Structured JSON to console — replaces `ConsoleLogStrategyNewRelicJson`.

```typescript
import { FormattingStrategyJson } from '#src/logger-strategy/formatting-strategy/json.js'
import { TransportingStrategyConsole } from '#src/logger-strategy/transporting-strategy/console.js'

export class LoggerStrategyPresetConsoleJson extends LoggerStrategyBase {
  constructor(params?: LoggerStrategyParams) {
    super({
      ...params,
      formattingStrategy: new FormattingStrategyJson(),
      transportingStrategy: new TransportingStrategyConsole(),
    })
  }
}
```

### LoggerStrategyPresetVoid

Silent / no-op logger. No formatting, no transporting.

```typescript
export class LoggerStrategyPresetVoid implements LoggerStrategy {
  debug(..._msgs: unknown[]): void {}
  info(..._msgs: unknown[]): void {}
  warn(..._msgs: unknown[]): void {}
  error(..._msgs: unknown[]): void {}
  clone(_?: LoggerStrategyParams): LoggerStrategyPresetVoid {
    return new LoggerStrategyPresetVoid()
  }
}
```

### LoggerStrategyPresetPino

Pino formatting + pino transport — outputs JSON via pino's logger.

```typescript
import { FormattingStrategyPino } from '#src/logger-strategy/formatting-strategy/pino.js'
import { TransportingStrategyPino } from '#src/logger-strategy/transporting-strategy/pino.js'

export class LoggerStrategyPresetPino extends LoggerStrategyBase {
  constructor(params?: LoggerStrategyParams & { pinoLogger?: Logger }) {
    const { pinoLogger, ...rest } = params ?? {}
    super({
      ...rest,
      formattingStrategy: new FormattingStrategyPino(),
      transportingStrategy: new TransportingStrategyPino(pinoLogger),
    })
  }
}
```

---

## LoggerStrategyBase (Custom Composition)

For users who want to mix and match their own format + transport:

```typescript
export type LoggerStrategyBaseParams = {
  formattingStrategy: FormattingStrategy
  transportingStrategy: TransportingStrategy
} & LoggerStrategyParams

export class LoggerStrategyBase implements LoggerStrategy {
  protected readonly _logLevel: LogLevel
  protected readonly _formattingStrategy: FormattingStrategy
  protected readonly _transportingStrategy: TransportingStrategy
  protected readonly _messagePrefix?: string
  protected readonly _meta?: ObjectType

  constructor(params: LoggerStrategyBaseParams) {
    const { logLevel = LogLevel.ERROR, formattingStrategy, transportingStrategy, messagePrefix, meta } = params
    this._logLevel = logLevel
    this._formattingStrategy = formattingStrategy
    this._transportingStrategy = transportingStrategy
    this._messagePrefix = messagePrefix
    this._meta = meta
  }

  clone(params?: LoggerStrategyParams): LoggerStrategyBase {
    const { meta, messagePrefix, logLevel } = params ?? {}
    return new LoggerStrategyBase({
      logLevel: logLevel ?? this._logLevel,
      formattingStrategy: this._formattingStrategy,      // shared reference
      transportingStrategy: this._transportingStrategy,  // shared reference
      messagePrefix: messagePrefix ?? this._messagePrefix,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      meta: (this._meta || meta) && { ...this._meta, ...meta },
    })
  }

  protected _shouldLog(currentLevel: LogLevel): boolean {
    return LoggerStrategyBase.LogLevelToInt(this._logLevel) >= LoggerStrategyBase.LogLevelToInt(currentLevel)
  }

  protected _logMessage(type: LogLevel, ...msgs: unknown[]): void {
    if (!this._shouldLog(type)) return

    const formatted = this._formattingStrategy.format(
      { level: type, meta: this._meta, prefix: this._messagePrefix },
      ...msgs,
    )
    formatted.forEach((log) => this._transportingStrategy.transport(log))
  }

  debug(...msgs: unknown[]): void { this._logMessage(LogLevel.DEBUG, ...msgs) }
  info(...msgs: unknown[]): void  { this._logMessage(LogLevel.INFO, ...msgs) }
  warn(...msgs: unknown[]): void  { this._logMessage(LogLevel.WARN, ...msgs) }
  error(...msgs: unknown[]): void { this._logMessage(LogLevel.ERROR, ...msgs) }

  static LogLevelToInt(logLevel: LogLevel): number { /* ... same as current ... */ }
}
```

---

## Usage Examples

### Using presets (most common)

```typescript
import { LoggerStrategyPresetConsoleSimpleString } from '@beecode/msh-logger/logger-strategy/preset/console-simple-string.js'
import { LoggerStrategyPresetConsoleJson } from '@beecode/msh-logger/logger-strategy/preset/console-json.js'
import { LoggerStrategyPresetVoid } from '@beecode/msh-logger/logger-strategy/preset/void.js'
import { LoggerStrategyPresetPino } from '@beecode/msh-logger/logger-strategy/preset/pino.js'

// Simple human-readable console logging
const logger = new LoggerStrategyPresetConsoleSimpleString({
  logLevel: LogLevel.DEBUG,
  messagePrefix: '[my-app]',
  meta: { service: 'user-api' },
})

// Structured JSON to console
const logger = new LoggerStrategyPresetConsoleJson({
  logLevel: LogLevel.INFO,
  messagePrefix: '[my-app]',
})

// Silent / testing
const logger = new LoggerStrategyPresetVoid()

// Pino (JSON output via pino)
const logger = new LoggerStrategyPresetPino({
  logLevel: LogLevel.INFO,
  pinoLogger: pino(pino.transport({ target: 'pino/file', options: { destination: '/var/log/app.log' } })),
})
```

### Custom composition (advanced)

```typescript
import { LoggerStrategyBase } from '@beecode/msh-logger/logger-strategy/base.js'
import { FormattingStrategyJson } from '@beecode/msh-logger/logger-strategy/formatting-strategy/json.js'
import { TransportingStrategyStream } from '@beecode/msh-logger/logger-strategy/transporting-strategy/stream.js'

// JSON format to stdout (for containerized environments)
const logger = new LoggerStrategyBase({
  logLevel: LogLevel.INFO,
  formattingStrategy: new FormattingStrategyJson(),
  transportingStrategy: new TransportingStrategyStream(process.stdout),
})

// Bring your own transport (HTTP, file, etc.)
const logger = new LoggerStrategyBase({
  formattingStrategy: new FormattingStrategyJson(),
  transportingStrategy: new MyHttpTransport({ url: 'https://logs.example.com/ingest' }),
})
```

### Cloning (child loggers)

```typescript
const requestLogger = logger.clone({
  messagePrefix: '[req-123]',
  meta: { userId: 'abc', requestId: '123' },
})
```

---

## Proposed Directory Structure

```
src/
  index.ts
  log-level.ts
  logger-strategy.ts                              # LoggerStrategy interface (unchanged)

  logger-strategy/
    base.ts                                       # LoggerStrategyBase (formatting + transporting composition)

    # Formatting concern
    formatting-strategy.ts                        # FormattingStrategy interface + FormattedLog type
    formatting-strategy/
      simple-string.ts                            # FormattingStrategySimpleString
      json.ts                                     # FormattingStrategyJson
      pino.ts                                     # FormattingStrategyPino
      __mocks__/

    # Transporting concern
    transporting-strategy.ts                      # TransportingStrategy interface
    transporting-strategy/
      console.ts                                  # TransportingStrategyConsole
      stream.ts                                   # TransportingStrategyStream
      pino.ts                                     # TransportingStrategyPino
      void.ts                                     # TransportingStrategyVoid
      __mocks__/

    # Presets (ready-made LoggerStrategy implementations)
    preset/
      console-simple-string.ts                    # LoggerStrategyPresetConsoleSimpleString
      console-json.ts                             # LoggerStrategyPresetConsoleJson
      void.ts                                     # LoggerStrategyPresetVoid
      pino.ts                                     # LoggerStrategyPresetPino

    # REMOVED (after migration)
    console.ts                                    # ❌ old LoggerStrategyConsole
    void.ts                                       # ❌ old LoggerStrategyVoid
    console/
      log-strategy.ts                             # ❌ old ConsoleLogStrategy
      log-strategy/
        simple.ts                                 # ❌ old ConsoleLogStrategySimple
        new-relic-json.ts                         # ❌ old ConsoleLogStrategyNewRelicJson
        pino.ts                                   # ❌ old ConsoleLogStrategyPino
```

---

## Mapping: Old → New

| Old Class | New Preset | New Components |
|---|---|---|
| `LoggerStrategyConsole` + `ConsoleLogStrategySimple` | `LoggerStrategyPresetConsoleSimpleString` | `FormattingStrategySimpleString` + `TransportingStrategyConsole` |
| `LoggerStrategyConsole` + `ConsoleLogStrategyNewRelicJson` | `LoggerStrategyPresetConsoleJson` | `FormattingStrategyJson` + `TransportingStrategyConsole` |
| `LoggerStrategyConsole` + `ConsoleLogStrategyPino` | `LoggerStrategyPresetPino` | `FormattingStrategyPino` + `TransportingStrategyPino` |
| `LoggerStrategyVoid` | `LoggerStrategyPresetVoid` | — (no formatting or transporting) |

---

## Migration Strategy

### Phase 1: Add new interfaces and classes alongside old ones (non-breaking)

- Add `FormattingStrategy`, `TransportingStrategy`, `FormattedLog` types
- Add all formatting and transporting implementations
- Add `LoggerStrategyBase` and all preset classes
- Keep existing `LoggerStrategyConsole`, `ConsoleLogStrategy`, and all old implementations untouched
- Ensure all old tests pass unchanged

### Phase 2: Deprecate old classes (semver minor)

- Mark `ConsoleLogStrategy`, `ConsoleLogStrategySimple`, `ConsoleLogStrategyNewRelicJson`, `ConsoleLogStrategyPino` with `@deprecated`
- Mark `LoggerStrategyConsole` with `@deprecated` (replaced by presets or `LoggerStrategyBase`)
- Mark `LoggerStrategyVoid` with `@deprecated` (replaced by `LoggerStrategyPresetVoid`)
- Update documentation to recommend presets

### Phase 3: Remove old classes (semver major)

- Remove the entire `console/log-strategy/` directory
- Remove `LoggerStrategyConsole` and `LoggerStrategyVoid`
- Only presets + base + formatting + transporting remain

---

## Summary of Benefits

| Benefit | Before (Current) | After (Proposed) |
|---|---|---|
| Mix format + transport | ❌ Must write new class | ✅ Compose via `LoggerStrategyBase` |
| Add new format | Reimplement transport | Implement `FormattingStrategy` only |
| Add new transport | Reimplement format | Implement `TransportingStrategy` only |
| Custom transport (HTTP, file) | Not possible | `TransportingStrategyStream` or BYO |
| Code duplication | Payload extraction duplicated 3x | Each concern implemented once |
| Naming accuracy | "ConsoleLogStrategyPino" (not console) | Preset name describes the use case |
| Quick start | Must understand strategy injection | Pick a preset, done |
| Testability | Must mock both concerns at once | Format and transport tested independently |

## Open Questions

1. **Should `FormattedLog` be a class or a plain type?** Plain type keeps it simple. A class could add `.toString()` but adds complexity.
2. **Should `LoggerStrategyPresetConsoleJson` include New Relic specific fields?** The NR-specific `logtype` field could be added via config on `FormattingStrategyJson` (e.g., `{ includeLogType: true }`) or as a separate `FormattingStrategyNewRelicJson` subclass.
3. **Should transports be async?** Currently everything is sync. If we want batching/HTTP, `transport()` might need to return `Promise<void>`. Consider for a future iteration.
4. **Should `clone()` allow overriding formatting/transporting strategy?** Currently not planned — cloned loggers share the same strategy references. This could be added later if needed.
5. **Naming: `Preset` in class names?** Alternative naming: `ConsoleSimpleStringLogger`, `ConsoleJsonLogger`, `VoidLogger`, `PinoLogger` — shorter but less consistent with the `LoggerStrategy*` pattern.
