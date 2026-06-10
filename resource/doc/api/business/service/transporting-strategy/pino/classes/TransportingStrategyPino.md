[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/transporting-strategy/pino](../README.md) / TransportingStrategyPino

# Class: TransportingStrategyPino

Defined in: [business/service/transporting-strategy/pino.ts:8](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/pino.ts#L8)

## Implements

- [`TransportingStrategy`](../../interfaces/TransportingStrategy.md)

## Constructors

### Constructor

> **new TransportingStrategyPino**(`logger?`): `TransportingStrategyPino`

Defined in: [business/service/transporting-strategy/pino.ts:11](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/pino.ts#L11)

#### Parameters

##### logger?

`Logger`

#### Returns

`TransportingStrategyPino`

## Properties

### \_logger

> `protected` **\_logger**: `Logger`

Defined in: [business/service/transporting-strategy/pino.ts:9](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/pino.ts#L9)

## Methods

### transport()

> **transport**(`log`): `void`

Defined in: [business/service/transporting-strategy/pino.ts:15](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/pino.ts#L15)

#### Parameters

##### log

[`FormattedLog`](../../../formatting-strategy/type-aliases/FormattedLog.md)

#### Returns

`void`

#### Implementation of

[`TransportingStrategy`](../../interfaces/TransportingStrategy.md).[`transport`](../../interfaces/TransportingStrategy.md#transport)

***

### LevelToFn()

> `static` **LevelToFn**(`level`): `"fatal"` \| `"error"` \| `"warn"` \| `"info"` \| `"debug"` \| `"trace"`

Defined in: [business/service/transporting-strategy/pino.ts:21](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/pino.ts#L21)

#### Parameters

##### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

`"fatal"` \| `"error"` \| `"warn"` \| `"info"` \| `"debug"` \| `"trace"`
