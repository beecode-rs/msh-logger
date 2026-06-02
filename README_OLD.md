[![Build Status](https://beecode.semaphoreci.com/badges/msh-logger/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-logger)
[![codecov](https://codecov.io/gh/beecode-rs/msh-logger/branch/main/graph/badge.svg?token=KDT5MPESF4)](https://codecov.io/gh/beecode-rs/msh-logger)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-logger)](https://github.com/beecode-rs/msh-logger/blob/main/LICENSE)
[![NPM](https://nodei.co/npm/@beecode/msh-logger.png)](https://nodei.co/npm/@beecode/msh-logger)

# @beecode/msh-logger

> Micro-service helper: logging abstraction using the Strategy Pattern

A TypeScript logging abstraction that lets you define **how** and **if** logs are emitted. Built on the Strategy Pattern with pluggable output strategies for console, New Relic JSON, and Pino.

<!-- toc -->

- [Install](#install)
- [Quick Start](#quick-start)
- [Diagram](#diagram)
- [Log Levels](#log-levels)
- [Logger Strategies](#logger-strategies)
  * [VoidLogger](#voidlogger)
  * [ConsoleLogger](#consolelogger)
    + [Simple Strategy](#simple-strategy)
    + [New Relic JSON Strategy](#new-relic-json-strategy)
    + [Pino Strategy](#pino-strategy)
- [Creating Child Loggers (clone)](#creating-child-loggers-clone)
- [API Reference](#api-reference)
- [License](#license)

<!-- tocstop -->

## Install

```bash
npm i @beecode/msh-logger
```

## Quick Start

```typescript
import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'

const logger = new LoggerStrategyConsole({ logLevel: LogLevel.INFO })

logger.debug('This is hidden') // filtered out (below INFO)
logger.info('Server started', { port: 3000 })
logger.warn('Deprecation warning')
logger.error('Something went wrong', new Error('boom'))
```

**Output:**

```
2026-05-30T12:00:00.000Z - INFO: Server started { port: 3000 }
2026-05-30T12:00:00.000Z - WARN: Deprecation warning
2026-05-30T12:00:00.000Z - ERROR: Something went wrong Error: boom
```

## Diagram

![vision-diagram](resource/doc/vision/vision.svg)

## Log Levels

The `LogLevel` enum controls which messages are emitted. Higher levels are more verbose:

| Level | Value | Description |
|-------|-------|-------------|
| `LogLevel.ERROR` | 0 | Only errors |
| `LogLevel.WARN` | 1 | Errors + warnings |
| `LogLevel.INFO` | 2 | Errors + warnings + info |
| `LogLevel.DEBUG` | 3 | All messages |

When a `LoggerStrategyConsole` is created, it defaults to `LogLevel.ERROR` (most restrictive).

## Logger Strategies

### VoidLogger

The default no-op logger. All log calls are silently ignored — useful for testing or disabling logging entirely.

```typescript
import { LoggerStrategyVoid } from '@beecode/msh-logger/logger-strategy/void'

const logger = new LoggerStrategyVoid()

logger.info('This does nothing')
logger.error('Neither does this')
```

### ConsoleLogger

A configurable console logger that supports pluggable output strategies for formatting.

```typescript
import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'

const logger = new LoggerStrategyConsole({
  logLevel: LogLevel.DEBUG,
  messagePrefix: 'my-app',
  meta: { service: 'api', version: '1.0.0' },
})
```

**Constructor params** (`ConsoleLoggerParams`):

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `logLevel` | `LogLevel` | `LogLevel.ERROR` | Minimum log level to emit |
| `consoleLogStrategy` | `ConsoleLogStrategy` | `ConsoleLogStrategySimple` | Output formatting strategy |
| `messagePrefix` | `string` | `undefined` | Prefix added to every message |
| `meta` | `ObjectType` | `undefined` | Metadata attached to every log entry |

#### Simple Strategy

Human-readable format with timestamps. This is the **default** strategy.

```typescript
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/logger-strategy/console/log-strategy/simple'

const logger = new LoggerStrategyConsole({
  consoleLogStrategy: new ConsoleLogStrategySimple(),
})
```

**Output format:**

```
2026-05-30T12:00:00.000Z - INFO: my-prefix Hello world
```

#### New Relic JSON Strategy

Outputs JSON-formatted log lines optimized for New Relic log ingestion.

```typescript
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'
import { ConsoleLogStrategyNewRelicJson } from '@beecode/msh-logger/logger-strategy/console/log-strategy/new-relic-json'

const logger = new LoggerStrategyConsole({
  consoleLogStrategy: new ConsoleLogStrategyNewRelicJson(),
})
```

**Output format:**

```json
{"logtype":"INFO","timestamp":1748606400000,"message":"Hello world"}
```

When `meta` is provided, it is spread into the JSON payload:

```json
{"service":"api","logtype":"INFO","timestamp":1748606400000,"message":"Hello world"}
```

#### Pino Strategy

Production-grade logging via [Pino](https://getpino.io/). Delegates formatting and transport to the Pino library.

```typescript
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'
import { ConsoleLogStrategyPino } from '@beecode/msh-logger/logger-strategy/console/log-strategy/pino'

const logger = new LoggerStrategyConsole({
  consoleLogStrategy: new ConsoleLogStrategyPino(),
})
```

## Creating Child Loggers (clone)

Use `clone()` to create a child logger that inherits settings from a parent, with optional overrides:

```typescript
import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'

const parent = new LoggerStrategyConsole({
  logLevel: LogLevel.INFO,
  messagePrefix: 'app',
  meta: { service: 'api' },
})

// Child inherits everything, overrides prefix and adds meta
const child = parent.clone({
  messagePrefix: 'app:router',
  meta: { route: '/users' },
})

child.info('User listed')
// Meta is shallow-merged: { service: 'api', route: '/users' }
```

## API Reference

Full API documentation is generated with TypeDoc and available in `resource/doc/api/`.

**Public exports** (from `@beecode/msh-logger`):

| Export | Kind | Description |
|--------|------|-------------|
| `LogLevel` | enum | Log level values: `ERROR`, `WARN`, `INFO`, `DEBUG` |
| `LoggerStrategy` | interface | Contract for all logger implementations |
| `LoggerStrategyParams` | type | Params for configuring loggers and `clone()` |
| `ObjectType` | type | `Record<string, unknown>` — metadata bag |

**Strategy imports** (via subpath):

| Import path | Export |
|-------------|--------|
| `@beecode/msh-logger/logger-strategy/void` | `LoggerStrategyVoid` |
| `@beecode/msh-logger/logger-strategy/console` | `LoggerStrategyConsole` |
| `@beecode/msh-logger/logger-strategy/console/log-strategy/simple` | `ConsoleLogStrategySimple` |
| `@beecode/msh-logger/logger-strategy/console/log-strategy/new-relic-json` | `ConsoleLogStrategyNewRelicJson` |
| `@beecode/msh-logger/logger-strategy/console/log-strategy/pino` | `ConsoleLogStrategyPino` |

## License

[MIT](LICENSE)
