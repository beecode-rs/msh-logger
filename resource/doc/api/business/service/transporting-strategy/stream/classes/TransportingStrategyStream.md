[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/transporting-strategy/stream](../README.md) / TransportingStrategyStream

# Class: TransportingStrategyStream

Defined in: [business/service/transporting-strategy/stream.ts:4](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/stream.ts#L4)

## Implements

- [`TransportingStrategy`](../../interfaces/TransportingStrategy.md)

## Constructors

### Constructor

> **new TransportingStrategyStream**(`_stream`): `TransportingStrategyStream`

Defined in: [business/service/transporting-strategy/stream.ts:5](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/stream.ts#L5)

#### Parameters

##### \_stream

`WritableStream`

#### Returns

`TransportingStrategyStream`

## Properties

### \_stream

> `protected` **\_stream**: `WritableStream`

Defined in: [business/service/transporting-strategy/stream.ts:5](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/stream.ts#L5)

## Methods

### transport()

> **transport**(`log`): `void`

Defined in: [business/service/transporting-strategy/stream.ts:7](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/transporting-strategy/stream.ts#L7)

#### Parameters

##### log

[`FormattedLog`](../../../formatting-strategy/type-aliases/FormattedLog.md)

#### Returns

`void`

#### Implementation of

[`TransportingStrategy`](../../interfaces/TransportingStrategy.md).[`transport`](../../interfaces/TransportingStrategy.md#transport)
