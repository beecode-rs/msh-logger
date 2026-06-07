[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/formatting-strategy/simple-string](../README.md) / FormattingStrategySimpleString

# Class: FormattingStrategySimpleString

Defined in: business/service/formatting-strategy/simple-string.ts:9

## Implements

- [`FormattingStrategy`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md)

## Constructors

### Constructor

> **new FormattingStrategySimpleString**(): `FormattingStrategySimpleString`

#### Returns

`FormattingStrategySimpleString`

## Methods

### \_formatLine()

> `protected` **\_formatLine**(`level`, `timestamp`, `msg`): `string`

Defined in: business/service/formatting-strategy/simple-string.ts:32

#### Parameters

##### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

##### timestamp

`number`

##### msg

`string`

#### Returns

`string`

***

### \_formatMsg()

> `protected` **\_formatMsg**(`msg`, `category?`): `string`

Defined in: business/service/formatting-strategy/simple-string.ts:36

#### Parameters

##### msg

`unknown`

##### category?

`string`

#### Returns

`string`

***

### format()

> **format**(`params`, ...`msgs`): [`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)[]

Defined in: business/service/formatting-strategy/simple-string.ts:10

#### Parameters

##### params

###### category?

`string`

###### level

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

###### metadata?

[`ObjectType`](../../../../../util/object-util/type-aliases/ObjectType.md)

###### timestamp?

`number`

##### msgs

...`unknown`[]

#### Returns

[`FormattedLog`](../../../../model/formatting-strategy/type-aliases/FormattedLog.md)[]

#### Implementation of

[`FormattingStrategy`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md).[`format`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md#format)
