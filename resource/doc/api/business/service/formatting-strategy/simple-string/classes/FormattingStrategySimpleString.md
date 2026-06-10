[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/formatting-strategy/simple-string](../README.md) / FormattingStrategySimpleString

# Class: FormattingStrategySimpleString

Defined in: [business/service/formatting-strategy/simple-string.ts:9](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/simple-string.ts#L9)

## Implements

- [`FormattingStrategy`](../../interfaces/FormattingStrategy.md)

## Constructors

### Constructor

> **new FormattingStrategySimpleString**(): `FormattingStrategySimpleString`

#### Returns

`FormattingStrategySimpleString`

## Methods

### \_formatLine()

> `protected` **\_formatLine**(`level`, `timestamp`, `msg`): `string`

Defined in: [business/service/formatting-strategy/simple-string.ts:29](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/simple-string.ts#L29)

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

Defined in: [business/service/formatting-strategy/simple-string.ts:41](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/simple-string.ts#L41)

#### Parameters

##### msg

`unknown`

##### category?

`string`

#### Returns

`string`

***

### \_formatPrefix()

> `protected` **\_formatPrefix**(`category?`): `string`

Defined in: [business/service/formatting-strategy/simple-string.ts:33](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/simple-string.ts#L33)

#### Parameters

##### category?

`string`

#### Returns

`string`

***

### format()

> **format**(`params`, ...`msgs`): [`FormattedLog`](../../type-aliases/FormattedLog.md)[]

Defined in: [business/service/formatting-strategy/simple-string.ts:10](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/simple-string.ts#L10)

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

[`FormattedLog`](../../type-aliases/FormattedLog.md)[]

#### Implementation of

[`FormattingStrategy`](../../interfaces/FormattingStrategy.md).[`format`](../../interfaces/FormattingStrategy.md#format)
