[@beecode/msh-logger](../README.md) / logger-strategy

# Module: logger-strategy

## Table of contents

### Interfaces

- [LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md)

### Type Aliases

- [LoggerStrategyParams](logger_strategy.md#loggerstrategyparams)
- [ObjectType](logger_strategy.md#objecttype)

## Type Aliases

### LoggerStrategyParams

Ƭ **LoggerStrategyParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `logLevel?` | [`LogLevel`](../enums/log_level.LogLevel.md) |
| `messagePrefix?` | `string` |
| `meta?` | [`ObjectType`](logger_strategy.md#objecttype) |

#### Defined in

[logger-strategy.ts:5](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L5)

___

### ObjectType

Ƭ **ObjectType**: `Record`\<`string`, `unknown`\>

#### Defined in

[logger-strategy.ts:3](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L3)
