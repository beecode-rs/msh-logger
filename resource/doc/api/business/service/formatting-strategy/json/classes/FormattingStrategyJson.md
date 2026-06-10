[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/formatting-strategy/json](../README.md) / FormattingStrategyJson

# Class: FormattingStrategyJson

Defined in: [business/service/formatting-strategy/json.ts:9](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/json.ts#L9)

## Implements

- [`FormattingStrategy`](../../interfaces/FormattingStrategy.md)

## Constructors

### Constructor

> **new FormattingStrategyJson**(): `FormattingStrategyJson`

#### Returns

`FormattingStrategyJson`

## Methods

### \_extractPayload()

> `protected` **\_extractPayload**(`msg`): `object`

Defined in: [business/service/formatting-strategy/json.ts:32](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/json.ts#L32)

#### Parameters

##### msg

`unknown`

#### Returns

`object`

##### message

> **message**: `string`

***

### format()

> **format**(`params`, ...`msgs`): [`FormattedLog`](../../type-aliases/FormattedLog.md)[]

Defined in: [business/service/formatting-strategy/json.ts:10](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy/json.ts#L10)

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

[`FormattedLog`](../../type-aliases/FormattedLog.md)[]

#### Implementation of

[`FormattingStrategy`](../../interfaces/FormattingStrategy.md).[`format`](../../interfaces/FormattingStrategy.md#format)
