[@beecode/msh-logger](../README.md) / logger-strategy

# Module: logger-strategy

## Table of contents

### Interfaces

- [LoggerStrategy](../interfaces/logger_strategy.LoggerStrategy.md)

### Type Aliases

- [LoggerStrategyParams](logger_strategy.md#loggerstrategyparams)
- [ObjectType](logger_strategy.md#objecttype)
- [StringOrObjectType](logger_strategy.md#stringorobjecttype)

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

[logger-strategy/index.ts:7](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L7)

___

### ObjectType

Ƭ **ObjectType**: `Record`<`string`, `any`\>

#### Defined in

[logger-strategy/index.ts:3](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L3)

___

### StringOrObjectType

Ƭ **StringOrObjectType**: `string` \| [`ObjectType`](logger_strategy.md#objecttype)

#### Defined in

[logger-strategy/index.ts:5](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L5)
