[![Build Status](https://beecode.semaphoreci.com/badges/msh-logger/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-logger)
[![codecov](https://codecov.io/gh/beecode-rs/msh-logger/branch/main/graph/badge.svg?token=KDT5MPESF4)](https://codecov.io/gh/beecode-rs/msh-logger)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-logger)](https://github.com/beecode-rs/msh-logger/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-logger.png)](https://nodei.co/npm/@beecode/msh-logger)

# msh-logger

Micro-service helper: node environment

This project is intended to be used in typescript project to help with logging needs.

<!-- toc -->

- [Install](#install)
- [Diagram](#diagram)
- [Logger Strategy](#logger-strategy)
  * [NoLogger](#nologger)
  * [ConsoleLogger](#consolelogger)

<!-- tocstop -->

## Install

`npm i @beecode/msh-logger`

## Diagram

![vision-diagram](resource/doc/vision/vision.svg)

## Logger Strategy

Define how and if we are logging.

### NoLogger

This is the default logging strategy, meaning the logging is ignored.

### ConsoleLogger

This is a simple logging strategy, it outputs all logs to console with a prefix of the log level (`ERROR:`, `WARN:`, `INFO:`
, `DEBUG:`).

```typescript
import MshNodeEnv, { logger } from '@beecode/msh-node-env'

const env = MshNodeEnv({ loggerStrategy: new logger.ConsoleLogger(logger.LogLevel.INFO) })
```

