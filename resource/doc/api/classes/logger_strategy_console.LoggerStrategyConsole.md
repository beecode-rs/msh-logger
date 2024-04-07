[@beecode/msh-logger](../README.md) / [logger-strategy/console](../modules/logger_strategy_console.md) / LoggerStrategyConsole

# Class: LoggerStrategyConsole

[logger-strategy/console](../modules/logger_strategy_console.md).LoggerStrategyConsole

## Implements

- [`LoggerStrategy`](../interfaces/logger_strategy.LoggerStrategy.md)

## Table of contents

### Constructors

- [constructor](logger_strategy_console.LoggerStrategyConsole.md#constructor)

### Properties

- [\_consoleLogStrategy](logger_strategy_console.LoggerStrategyConsole.md#_consolelogstrategy)
- [\_logLevel](logger_strategy_console.LoggerStrategyConsole.md#_loglevel)
- [\_messagePrefix](logger_strategy_console.LoggerStrategyConsole.md#_messageprefix)
- [\_meta](logger_strategy_console.LoggerStrategyConsole.md#_meta)

### Methods

- [\_logMessage](logger_strategy_console.LoggerStrategyConsole.md#_logmessage)
- [\_shouldLog](logger_strategy_console.LoggerStrategyConsole.md#_shouldlog)
- [clone](logger_strategy_console.LoggerStrategyConsole.md#clone)
- [debug](logger_strategy_console.LoggerStrategyConsole.md#debug)
- [error](logger_strategy_console.LoggerStrategyConsole.md#error)
- [info](logger_strategy_console.LoggerStrategyConsole.md#info)
- [warn](logger_strategy_console.LoggerStrategyConsole.md#warn)
- [LogLevelToInt](logger_strategy_console.LoggerStrategyConsole.md#logleveltoint)

## Constructors

### constructor

• **new LoggerStrategyConsole**(`params?`): [`LoggerStrategyConsole`](logger_strategy_console.LoggerStrategyConsole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ConsoleLoggerParams`](../modules/logger_strategy_console.md#consoleloggerparams) |

#### Returns

[`LoggerStrategyConsole`](logger_strategy_console.LoggerStrategyConsole.md)

#### Defined in

[logger-strategy/console.ts:18](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L18)

## Properties

### \_consoleLogStrategy

• `Protected` `Readonly` **\_consoleLogStrategy**: [`ConsoleLogStrategy`](../interfaces/logger_strategy_console_log_strategy.ConsoleLogStrategy.md)

#### Defined in

[logger-strategy/console.ts:14](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L14)

___

### \_logLevel

• `Protected` `Readonly` **\_logLevel**: [`LogLevel`](../enums/log_level.LogLevel.md)

#### Defined in

[logger-strategy/console.ts:13](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L13)

___

### \_messagePrefix

• `Protected` `Optional` `Readonly` **\_messagePrefix**: `string`

#### Defined in

[logger-strategy/console.ts:15](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L15)

___

### \_meta

• `Protected` `Optional` `Readonly` **\_meta**: [`ObjectType`](../modules/logger_strategy.md#objecttype)

#### Defined in

[logger-strategy/console.ts:16](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L16)

## Methods

### \_logMessage

▸ **_logMessage**(`type`, `...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`LogLevel`](../enums/log_level.LogLevel.md) |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Defined in

[logger-strategy/console.ts:56](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L56)

___

### \_shouldLog

▸ **_shouldLog**(`currentLevel`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentLevel` | [`LogLevel`](../enums/log_level.LogLevel.md) |

#### Returns

`boolean`

#### Defined in

[logger-strategy/console.ts:52](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L52)

___

### clone

▸ **clone**(`params?`): [`LoggerStrategyConsole`](logger_strategy_console.LoggerStrategyConsole.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`LoggerStrategyParams`](../modules/logger_strategy.md#loggerstrategyparams) |

#### Returns

[`LoggerStrategyConsole`](logger_strategy_console.LoggerStrategyConsole.md)

#### Implementation of

[LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md).[clone](../interfaces/logger_strategy.LoggerStrategy.md#clone)

#### Defined in

[logger-strategy/console.ts:27](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L27)

___

### debug

▸ **debug**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Implementation of

[LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md).[debug](../interfaces/logger_strategy.LoggerStrategy.md#debug)

#### Defined in

[logger-strategy/console.ts:63](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L63)

___

### error

▸ **error**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Implementation of

[LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md).[error](../interfaces/logger_strategy.LoggerStrategy.md#error)

#### Defined in

[logger-strategy/console.ts:75](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L75)

___

### info

▸ **info**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Implementation of

[LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md).[info](../interfaces/logger_strategy.LoggerStrategy.md#info)

#### Defined in

[logger-strategy/console.ts:67](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L67)

___

### warn

▸ **warn**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Implementation of

[LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md).[warn](../interfaces/logger_strategy.LoggerStrategy.md#warn)

#### Defined in

[logger-strategy/console.ts:71](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L71)

___

### LogLevelToInt

▸ **LogLevelToInt**(`logLevel`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logLevel` | [`LogLevel`](../enums/log_level.LogLevel.md) |

#### Returns

`number`

#### Defined in

[logger-strategy/console.ts:37](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy/console.ts#L37)
