[@beecode/msh-logger](../README.md) / [logger-strategy/console/log-strategy](../modules/logger_strategy_console_log_strategy.md) / ConsoleLogStrategy

# Interface: ConsoleLogStrategy

[logger-strategy/console/log-strategy](../modules/logger_strategy_console_log_strategy.md).ConsoleLogStrategy

## Implemented by

- [`ConsoleLogStrategyMock`](../classes/logger_strategy_console_log_strategy___mocks___console_log_strategy_mock.ConsoleLogStrategyMock.md)
- [`ConsoleLogStrategyNewRelicJson`](../classes/logger_strategy_console_log_strategy_new_relic_json.ConsoleLogStrategyNewRelicJson.md)
- [`ConsoleLogStrategySimple`](../classes/logger_strategy_console_log_strategy_simple.ConsoleLogStrategySimple.md)

## Table of contents

### Methods

- [log](logger_strategy_console_log_strategy.ConsoleLogStrategy.md#log)

## Methods

### log

▸ **log**(`params`, `...messageObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.datetime?` | `Date` |
| `params.meta?` | [`ObjectType`](../modules/logger_strategy.md#objecttype) |
| `params.prefix?` | `string` |
| `params.type` | [`LogLevel`](../enums/log_level.LogLevel.md) |
| `...messageObjects` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype)[] |

#### Returns

`void`

#### Defined in

[logger-strategy/console/log-strategy/index.ts:5](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/index.ts#L5)
