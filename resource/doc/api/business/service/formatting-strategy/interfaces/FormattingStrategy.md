[**@beecode/msh-logger**](../../../../README.md)

***

[@beecode/msh-logger](../../../../README.md) / [business/service/formatting-strategy](../README.md) / FormattingStrategy

# Interface: FormattingStrategy

Defined in: [business/service/formatting-strategy.ts:10](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy.ts#L10)

## Methods

### format()

> **format**(`params`, ...`msgs`): [`FormattedLog`](../type-aliases/FormattedLog.md)[]

Defined in: [business/service/formatting-strategy.ts:11](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/formatting-strategy.ts#L11)

#### Parameters

##### params

###### category?

`string`

###### level

[`LogLevel`](../../../model/log-level/enumerations/LogLevel.md)

###### meta?

[`ObjectType`](../../../../util/object-util/type-aliases/ObjectType.md)

###### timestamp?

`number`

##### msgs

...`unknown`[]

#### Returns

[`FormattedLog`](../type-aliases/FormattedLog.md)[]
