[@beecode/msh-logger](../README.md) / [logger-strategy](../modules/logger_strategy.md) / LoggerStrategy

# Interface: LoggerStrategy

[logger-strategy](../modules/logger_strategy.md).LoggerStrategy

## Implemented by

- [`LoggerStrategyConsole`](../classes/logger_strategy_console.LoggerStrategyConsole.md)
- [`LoggerStrategyMock`](../classes/logger_strategy___mocks___logger_strategy_mock.LoggerStrategyMock.md)
- [`LoggerStrategyVoid`](../classes/logger_strategy_void.LoggerStrategyVoid.md)

## Table of contents

### Methods

- [clone](logger_strategy.LoggerStrategy.md#clone)
- [debug](logger_strategy.LoggerStrategy.md#debug)
- [error](logger_strategy.LoggerStrategy.md#error)
- [info](logger_strategy.LoggerStrategy.md#info)
- [warn](logger_strategy.LoggerStrategy.md#warn)

## Methods

### clone

▸ **clone**(`overrideParams?`): [`LoggerStrategy`](logger_strategy.LoggerStrategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrideParams?` | [`LoggerStrategyParams`](../modules/logger_strategy.md#loggerstrategyparams) |

#### Returns

[`LoggerStrategy`](logger_strategy.LoggerStrategy.md)

#### Defined in

[logger-strategy/index.ts:18](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L18)

___

### debug

▸ **debug**(`...messageObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messageObjects` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype)[] |

#### Returns

`void`

#### Defined in

[logger-strategy/index.ts:14](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L14)

___

### error

▸ **error**(`...messageObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messageObjects` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype)[] |

#### Returns

`void`

#### Defined in

[logger-strategy/index.ts:17](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L17)

___

### info

▸ **info**(`...messageObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messageObjects` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype)[] |

#### Returns

`void`

#### Defined in

[logger-strategy/index.ts:15](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L15)

___

### warn

▸ **warn**(`...messageObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messageObjects` | [`StringOrObjectType`](../modules/logger_strategy.md#stringorobjecttype)[] |

#### Returns

`void`

#### Defined in

[logger-strategy/index.ts:16](https://github.com/beecode-rs/msh-logger/blob/f45e39e/src/logger-strategy/index.ts#L16)
