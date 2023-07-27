[@beecode/msh-logger](../README.md) / [logger-strategy/console/log-strategy/simple](../modules/logger_strategy_console_log_strategy_simple.md) / ConsoleLogStrategySimple

# Class: ConsoleLogStrategySimple

[logger-strategy/console/log-strategy/simple](../modules/logger_strategy_console_log_strategy_simple.md).ConsoleLogStrategySimple

## Implements

- [`ConsoleLogStrategy`](../interfaces/logger_strategy_console_log_strategy.ConsoleLogStrategy.md)

## Table of contents

### Constructors

- [constructor](logger_strategy_console_log_strategy_simple.ConsoleLogStrategySimple.md#constructor)

### Methods

- [log](logger_strategy_console_log_strategy_simple.ConsoleLogStrategySimple.md#log)
- [LogTypeToFunctionName](logger_strategy_console_log_strategy_simple.ConsoleLogStrategySimple.md#logtypetofunctionname)

## Constructors

### constructor

• **new ConsoleLogStrategySimple**()

## Methods

### log

▸ **log**(`params`, `...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.datetime?` | `Date` |
| `params.meta?` | [`ObjectType`](../modules/logger_strategy.md#objecttype) |
| `params.prefix?` | `string` |
| `params.type` | [`LogLevel`](../enums/log_level.LogLevel.md) |
| `...msgs` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype)[] |

#### Returns

`void`

#### Implementation of

[ConsoleLogStrategy](../interfaces/logger_strategy_console_log_strategy.ConsoleLogStrategy.md).[log](../interfaces/logger_strategy_console_log_strategy.ConsoleLogStrategy.md#log)

#### Defined in

[logger-strategy/console/log-strategy/simple.ts:8](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/simple.ts#L8)

___

### LogTypeToFunctionName

▸ `Static` **LogTypeToFunctionName**(`type`): ``"log"`` \| ``"error"`` \| ``"info"`` \| ``"warn"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`LogLevel`](../enums/log_level.LogLevel.md) |

#### Returns

``"log"`` \| ``"error"`` \| ``"info"`` \| ``"warn"``

#### Defined in

[logger-strategy/console/log-strategy/simple.ts:26](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/simple.ts#L26)
