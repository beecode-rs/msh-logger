[@beecode/msh-logger](../README.md) / [logger-strategy](../modules/logger_strategy.md) / LoggerStrategy

# Interface: LoggerStrategy

[logger-strategy](../modules/logger_strategy.md).LoggerStrategy

## Implemented by

- [`LoggerStrategyConsole`](../classes/logger_strategy_console.LoggerStrategyConsole.md)
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

[logger-strategy.ts:16](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L16)

___

### debug

▸ **debug**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Defined in

[logger-strategy.ts:12](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L12)

___

### error

▸ **error**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Defined in

[logger-strategy.ts:15](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L15)

___

### info

▸ **info**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Defined in

[logger-strategy.ts:13](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L13)

___

### warn

▸ **warn**(`...msgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msgs` | `unknown`[] |

#### Returns

`void`

#### Defined in

[logger-strategy.ts:14](https://github.com/beecode-rs/msh-logger/blob/4fbfbd0/src/logger-strategy.ts#L14)
