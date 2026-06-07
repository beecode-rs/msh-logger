[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/transporting-strategy/console](../README.md) / TransportingStrategyConsole

# Class: TransportingStrategyConsole

Defined in: business/service/transporting-strategy/console.ts:8

## Implements

- [`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md)

## Constructors

### Constructor

> **new TransportingStrategyConsole**(): `TransportingStrategyConsole`

#### Returns

`TransportingStrategyConsole`

## Methods

### transport()

> **transport**(`log`): `void`

Defined in: business/service/transporting-strategy/console.ts:9

#### Parameters

##### log

[`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)

#### Returns

`void`

#### Implementation of

[`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md).[`transport`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md#transport)

***

### LevelToFn()

> `static` **LevelToFn**(`level`): (...`args`) => `void`

Defined in: business/service/transporting-strategy/console.ts:19

#### Parameters

##### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

> (...`args`): `void`

##### Parameters

###### args

...`unknown`[]

##### Returns

`void`
