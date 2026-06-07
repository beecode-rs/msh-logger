[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/transporting-strategy/pino](../README.md) / TransportingStrategyPino

# Class: TransportingStrategyPino

Defined in: business/service/transporting-strategy/pino.ts:8

## Implements

- [`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md)

## Constructors

### Constructor

> **new TransportingStrategyPino**(`logger?`): `TransportingStrategyPino`

Defined in: business/service/transporting-strategy/pino.ts:11

#### Parameters

##### logger?

`Logger`

#### Returns

`TransportingStrategyPino`

## Properties

### \_logger

> `protected` **\_logger**: `Logger`

Defined in: business/service/transporting-strategy/pino.ts:9

## Methods

### transport()

> **transport**(`log`): `void`

Defined in: business/service/transporting-strategy/pino.ts:15

#### Parameters

##### log

[`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)

#### Returns

`void`

#### Implementation of

[`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md).[`transport`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md#transport)

***

### LevelToFn()

> `static` **LevelToFn**(`level`): `"fatal"` \| `"error"` \| `"warn"` \| `"info"` \| `"debug"` \| `"trace"`

Defined in: business/service/transporting-strategy/pino.ts:21

#### Parameters

##### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

`"fatal"` \| `"error"` \| `"warn"` \| `"info"` \| `"debug"` \| `"trace"`
