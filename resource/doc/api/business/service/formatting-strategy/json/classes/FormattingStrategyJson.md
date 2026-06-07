[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/formatting-strategy/json](../README.md) / FormattingStrategyJson

# Class: FormattingStrategyJson

Defined in: business/service/formatting-strategy/json.ts:9

## Implements

- [`FormattingStrategy`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md)

## Constructors

### Constructor

> **new FormattingStrategyJson**(): `FormattingStrategyJson`

#### Returns

`FormattingStrategyJson`

## Methods

### \_extractPayload()

> `protected` **\_extractPayload**(`msg`): `object`

Defined in: business/service/formatting-strategy/json.ts:32

#### Parameters

##### msg

`unknown`

#### Returns

`object`

##### message

> **message**: `string`

***

### format()

> **format**(`params`, ...`msgs`): [`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)[]

Defined in: business/service/formatting-strategy/json.ts:10

#### Parameters

##### params

###### category?

`string`

###### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

###### meta?

[`ObjectType`](../../../../../util/object-util/type-aliases/ObjectType.md)

###### timestamp?

`number`

##### msgs

...`unknown`[]

#### Returns

[`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)[]

#### Implementation of

[`FormattingStrategy`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md).[`format`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md#format)
