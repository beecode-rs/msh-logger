[**@beecode/msh-logger**](../../../../README.md)

***

[@beecode/msh-logger](../../../../README.md) / [business/model/formatting-strategy](../README.md) / FormattingStrategy

# Interface: FormattingStrategy

Defined in: business/model/formatting-strategy.ts:10

## Methods

### format()

> **format**(`params`, ...`msgs`): [`FormattedLog`](../type-aliases/FormattedLog.md)[]

Defined in: business/model/formatting-strategy.ts:11

#### Parameters

##### params

###### category?

`string`

###### level

[`LogLevel`](../../log-level/enumerations/LogLevel.md)

###### meta?

[`ObjectType`](../../../../util/object-util/type-aliases/ObjectType.md)

###### timestamp?

`number`

##### msgs

...`unknown`[]

#### Returns

[`FormattedLog`](../type-aliases/FormattedLog.md)[]
