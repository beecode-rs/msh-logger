[**@beecode/msh-logger**](../../../../README.md)

***

[@beecode/msh-logger](../../../../README.md) / [controller/preset/console-simple-string](../README.md) / PresetConsoleSimpleString

# Class: PresetConsoleSimpleString

Defined in: [controller/preset/console-simple-string.ts:5](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/controller/preset/console-simple-string.ts#L5)

## Extends

- [`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md)

## Constructors

### Constructor

> **new PresetConsoleSimpleString**(`params?`): `PresetConsoleSimpleString`

Defined in: [controller/preset/console-simple-string.ts:6](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/controller/preset/console-simple-string.ts#L6)

#### Parameters

##### params?

`Omit`\<[`LoggerStrategyBaseParams`](../../../../business/service/logger-strategy/base/type-aliases/LoggerStrategyBaseParams.md), `"formattingStrategy"` \| `"transportingStrategy"`\>

#### Returns

`PresetConsoleSimpleString`

#### Overrides

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`constructor`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#constructor)

## Properties

### \_category?

> `protected` `readonly` `optional` **\_category?**: `string`

Defined in: [business/service/logger-strategy/base.ts:25](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L25)

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_category`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_category)

***

### \_formattingStrategy

> `protected` `readonly` **\_formattingStrategy**: [`FormattingStrategy`](../../../../business/service/formatting-strategy/interfaces/FormattingStrategy.md)

Defined in: [business/service/logger-strategy/base.ts:23](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L23)

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_formattingStrategy`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_formattingstrategy)

***

### \_logLevel

> `protected` `readonly` **\_logLevel**: [`LogLevel`](../../../../business/model/log-level/enumerations/LogLevel.md)

Defined in: [business/service/logger-strategy/base.ts:22](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L22)

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_logLevel`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_loglevel)

***

### \_meta?

> `protected` `readonly` `optional` **\_meta?**: [`ObjectType`](../../../../util/object-util/type-aliases/ObjectType.md)

Defined in: [business/service/logger-strategy/base.ts:26](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L26)

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_meta`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_meta)

***

### \_transportingStrategy

> `protected` `readonly` **\_transportingStrategy**: [`TransportingStrategy`](../../../../business/service/transporting-strategy/interfaces/TransportingStrategy.md)

Defined in: [business/service/logger-strategy/base.ts:24](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L24)

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_transportingStrategy`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_transportingstrategy)

## Methods

### \_logMessage()

> `protected` **\_logMessage**(`type`, ...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:72](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L72)

#### Parameters

##### type

[`LogLevel`](../../../../business/model/log-level/enumerations/LogLevel.md)

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_logMessage`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_logmessage)

***

### \_shouldLog()

> `protected` **\_shouldLog**(`currentLevel`): `boolean`

Defined in: [business/service/logger-strategy/base.ts:68](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L68)

#### Parameters

##### currentLevel

[`LogLevel`](../../../../business/model/log-level/enumerations/LogLevel.md)

#### Returns

`boolean`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`_shouldLog`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#_shouldlog)

***

### clone()

> **clone**(`params?`): [`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md)

Defined in: [business/service/logger-strategy/base.ts:37](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L37)

#### Parameters

##### params?

[`LoggerStrategyParams`](../../../../business/service/logger-strategy/type-aliases/LoggerStrategyParams.md)

#### Returns

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md)

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`clone`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#clone)

***

### debug()

> **debug**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:103](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L103)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`debug`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#debug)

***

### error()

> **error**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:91](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L91)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`error`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#error)

***

### fatal()

> **fatal**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:87](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L87)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`fatal`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#fatal)

***

### info()

> **info**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:99](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L99)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`info`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#info)

***

### trace()

> **trace**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:107](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L107)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`trace`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#trace)

***

### warn()

> **warn**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:95](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L95)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`warn`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#warn)

***

### LogLevelToInt()

> `static` **LogLevelToInt**(`logLevel`): `number`

Defined in: [business/service/logger-strategy/base.ts:49](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L49)

#### Parameters

##### logLevel

[`LogLevel`](../../../../business/model/log-level/enumerations/LogLevel.md)

#### Returns

`number`

#### Inherited from

[`LoggerStrategyBase`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md).[`LogLevelToInt`](../../../../business/service/logger-strategy/base/classes/LoggerStrategyBase.md#logleveltoint)
