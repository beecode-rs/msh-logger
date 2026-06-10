[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/transporting-strategy/console](../README.md) / TransportingStrategyConsole

# Class: TransportingStrategyConsole

Defined in: [business/service/transporting-strategy/console.ts:8](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/console.ts#L8)

## Implements

- [`TransportingStrategy`](../../interfaces/TransportingStrategy.md)

## Constructors

### Constructor

> **new TransportingStrategyConsole**(): `TransportingStrategyConsole`

#### Returns

`TransportingStrategyConsole`

## Methods

### transport()

> **transport**(`log`): `void`

Defined in: [business/service/transporting-strategy/console.ts:9](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/console.ts#L9)

#### Parameters

##### log

[`FormattedLog`](../../../formatting-strategy/type-aliases/FormattedLog.md)

#### Returns

`void`

#### Implementation of

[`TransportingStrategy`](../../interfaces/TransportingStrategy.md).[`transport`](../../interfaces/TransportingStrategy.md#transport)

***

### LevelToFn()

> `static` **LevelToFn**(`level`): (...`args`) => `void`

Defined in: [business/service/transporting-strategy/console.ts:19](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/console.ts#L19)

#### Parameters

##### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

(...`args`) => `void`
