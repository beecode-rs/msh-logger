# Migrating from v1 to v2

v2 decouples formatting from transport, renames several concepts, and expands the log level spectrum. Below is a quick reference for every breaking change.

### Logger classes → Presets

| v1 | v2 |
|----|----|
| `new LoggerStrategyConsole()` | `new PresetConsoleSimpleString()` or `new PresetConsoleJson()` |
| `new LoggerStrategyVoid()` | `new PresetVoid()` |

### Console log strategies → separated format + transport

| v1 | v2 Formatting | v2 Transporting |
|----|---------------|-----------------|
| `ConsoleLogStrategySimple` | `FormattingStrategySimpleString` | `TransportingStrategyConsole` |
| `ConsoleLogStrategyNewRelicJson` | `FormattingStrategyJson` | `TransportingStrategyConsole` |
| `ConsoleLogStrategyPino` | `FormattingStrategyJson` | `TransportingStrategyPino` |

For quick migration, use the equivalent preset:

```typescript
// v1
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'
import { ConsoleLogStrategyNewRelicJson } from '@beecode/msh-logger/logger-strategy/console/log-strategy/new-relic-json'
const logger = new LoggerStrategyConsole({ consoleLogStrategy: new ConsoleLogStrategyNewRelicJson() })

// v2 — use the preset
import { PresetConsoleJson } from '@beecode/msh-logger/preset/console-json'
const logger = new PresetConsoleJson()
```

### `messagePrefix` → `category`

```typescript
// v1
new LoggerStrategyConsole({ messagePrefix: 'my-app' })

// v2
new PresetConsoleSimpleString({ category: 'my-app' })
```

### New log levels: `fatal()` and `trace()`

v2 adds two new methods to `LoggerStrategy`:

```typescript
logger.fatal('Unrecoverable error') // new — highest severity
logger.trace('Function entry')      // new — lowest severity
```

`LogLevel` enum now has `FATAL` (60) and `TRACE` (10). The integer mapping changed from ascending 0–3 to descending 10–60 (higher number = more severe).

### `consoleLogStrategy` param removed

The `consoleLogStrategy` constructor option no longer exists. Instead, compose a `LoggerStrategyBase` directly:

```typescript
// v1
new LoggerStrategyConsole({ consoleLogStrategy: myStrategy })

// v2 — compose directly
import { LoggerStrategyBase } from '@beecode/msh-logger/logger-strategy/base'
new LoggerStrategyBase({
  formattingStrategy: new FormattingStrategyJson(),
  transportingStrategy: new TransportingStrategyConsole(),
})
```

### JSON output format changed

v1 `ConsoleLogStrategyNewRelicJson` used `logtype` as the level key. v2 uses `level`:

```json
// v1 output
{ "logtype": "INFO", "timestamp": 1748606400000, "message": "Hello" }

// v2 output
{ "level": "INFO", "timestamp": 1748606400000, "message": "Hello" }
```

### Import path changes

| v1 Import | v2 Import |
|-----------|-----------|
| `@beecode/msh-logger/logger-strategy/void` | `@beecode/msh-logger/preset/void` |
| `@beecode/msh-logger/logger-strategy/console` | `@beecode/msh-logger/preset/console-simple-string` |
| `@beecode/msh-logger/logger-strategy/console/log-strategy/simple` | `@beecode/msh-logger/preset/console-simple-string` |
| `@beecode/msh-logger/logger-strategy/console/log-strategy/new-relic-json` | `@beecode/msh-logger/preset/console-json` |
| `@beecode/msh-logger/logger-strategy/console/log-strategy/pino` | `@beecode/msh-logger/preset/pino` |

### Custom logger implementations

If you implemented `LoggerStrategy` directly, add the two new methods:

```typescript
fatal(...msgs: unknown[]): void { /* ... */ }
trace(...msgs: unknown[]): void { /* ... */ }
```
