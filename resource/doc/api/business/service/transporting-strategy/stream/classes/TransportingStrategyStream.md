[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/transporting-strategy/stream](../README.md) / TransportingStrategyStream

# Class: TransportingStrategyStream

Defined in: business/service/transporting-strategy/stream.ts:4

## Implements

- [`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md)

## Constructors

### Constructor

> **new TransportingStrategyStream**(`_stream`): `TransportingStrategyStream`

Defined in: business/service/transporting-strategy/stream.ts:5

#### Parameters

##### \_stream

`WritableStream`

#### Returns

`TransportingStrategyStream`

## Properties

### \_stream

> `protected` **\_stream**: `WritableStream`

Defined in: business/service/transporting-strategy/stream.ts:5

## Methods

### transport()

> **transport**(`log`): `void`

Defined in: business/service/transporting-strategy/stream.ts:7

#### Parameters

##### log

[`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)

#### Returns

`void`

#### Implementation of

[`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md).[`transport`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md#transport)
