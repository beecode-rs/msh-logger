[@beecode/msh-logger](../README.md) / [logger-strategy/console/log-strategy/new-relic-json](../modules/logger_strategy_console_log_strategy_new_relic_json.md) / ConsoleLogStrategyNewRelicJson

# Class: ConsoleLogStrategyNewRelicJson

[logger-strategy/console/log-strategy/new-relic-json](../modules/logger_strategy_console_log_strategy_new_relic_json.md).ConsoleLogStrategyNewRelicJson

## Implements

- [`ConsoleLogStrategy`](../interfaces/logger_strategy_console_log_strategy.ConsoleLogStrategy.md)

## Table of contents

### Constructors

- [constructor](logger_strategy_console_log_strategy_new_relic_json.ConsoleLogStrategyNewRelicJson.md#constructor)

### Properties

- [\_objectUtil](logger_strategy_console_log_strategy_new_relic_json.ConsoleLogStrategyNewRelicJson.md#_objectutil)

### Methods

- [\_joinDefined](logger_strategy_console_log_strategy_new_relic_json.ConsoleLogStrategyNewRelicJson.md#_joindefined)
- [\_messagePayloadExtractorIfExists](logger_strategy_console_log_strategy_new_relic_json.ConsoleLogStrategyNewRelicJson.md#_messagepayloadextractorifexists)
- [log](logger_strategy_console_log_strategy_new_relic_json.ConsoleLogStrategyNewRelicJson.md#log)

## Constructors

### constructor

• **new ConsoleLogStrategyNewRelicJson**()

## Properties

### \_objectUtil

• `Protected` **\_objectUtil**: `ObjectUtil`

#### Defined in

[logger-strategy/console/log-strategy/new-relic-json.ts:8](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/new-relic-json.ts#L8)

## Methods

### \_joinDefined

▸ `Protected` **_joinDefined**(`prefix?`, `msg?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | `string` |
| `msg?` | `string` |

#### Returns

`string`

#### Defined in

[logger-strategy/console/log-strategy/new-relic-json.ts:36](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/new-relic-json.ts#L36)

___

### \_messagePayloadExtractorIfExists

▸ `Protected` **_messagePayloadExtractorIfExists**(`params`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.msg` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype) |
| `params.prefix?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Defined in

[logger-strategy/console/log-strategy/new-relic-json.ts:26](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/new-relic-json.ts#L26)

___

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

[logger-strategy/console/log-strategy/new-relic-json.ts:10](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/console/log-strategy/new-relic-json.ts#L10)
