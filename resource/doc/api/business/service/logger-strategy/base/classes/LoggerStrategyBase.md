[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/logger-strategy/base](../README.md) / LoggerStrategyBase

# Class: LoggerStrategyBase

Defined in: [business/service/logger-strategy/base.ts:21](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L21)

## Extended by

- [`PresetConsoleJson`](../../../../../controller/preset/console-json/classes/PresetConsoleJson.md)
- [`PresetConsoleSimpleString`](../../../../../controller/preset/console-simple-string/classes/PresetConsoleSimpleString.md)
- [`PresetPino`](../../../../../controller/preset/pino/classes/PresetPino.md)

## Implements

- [`LoggerStrategy`](../../interfaces/LoggerStrategy.md)

## Constructors

### Constructor

> **new LoggerStrategyBase**(`params`): `LoggerStrategyBase`

Defined in: [business/service/logger-strategy/base.ts:28](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L28)

#### Parameters

##### params

[`LoggerStrategyBaseParams`](../type-aliases/LoggerStrategyBaseParams.md)

#### Returns

`LoggerStrategyBase`

## Properties

### \_category?

> `protected` `readonly` `optional` **\_category?**: `string`

Defined in: [business/service/logger-strategy/base.ts:25](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L25)

***

### \_formattingStrategy

> `protected` `readonly` **\_formattingStrategy**: [`FormattingStrategy`](../../../formatting-strategy/interfaces/FormattingStrategy.md)

Defined in: [business/service/logger-strategy/base.ts:23](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L23)

***

### \_logLevel

> `protected` `readonly` **\_logLevel**: [`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

Defined in: [business/service/logger-strategy/base.ts:22](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L22)

***

### \_meta?

> `protected` `readonly` `optional` **\_meta?**: [`ObjectType`](../../../../../util/object-util/type-aliases/ObjectType.md)

Defined in: [business/service/logger-strategy/base.ts:26](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L26)

***

### \_transportingStrategy

> `protected` `readonly` **\_transportingStrategy**: [`TransportingStrategy`](../../../transporting-strategy/interfaces/TransportingStrategy.md)

Defined in: [business/service/logger-strategy/base.ts:24](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L24)

## Methods

### \_logMessage()

> `protected` **\_logMessage**(`type`, ...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:72](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L72)

#### Parameters

##### type

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

##### msgs

...`unknown`[]

#### Returns

`void`

***

### \_shouldLog()

> `protected` **\_shouldLog**(`currentLevel`): `boolean`

Defined in: [business/service/logger-strategy/base.ts:68](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L68)

#### Parameters

##### currentLevel

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

`boolean`

***

### clone()

> **clone**(`params?`): `LoggerStrategyBase`

Defined in: [business/service/logger-strategy/base.ts:37](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L37)

#### Parameters

##### params?

[`LoggerStrategyParams`](../../type-aliases/LoggerStrategyParams.md)

#### Returns

`LoggerStrategyBase`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`clone`](../../interfaces/LoggerStrategy.md#clone)

***

### debug()

> **debug**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:103](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L103)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`debug`](../../interfaces/LoggerStrategy.md#debug)

***

### error()

> **error**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:91](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L91)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`error`](../../interfaces/LoggerStrategy.md#error)

***

### fatal()

> **fatal**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:87](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L87)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`fatal`](../../interfaces/LoggerStrategy.md#fatal)

***

### info()

> **info**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:99](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L99)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`info`](../../interfaces/LoggerStrategy.md#info)

***

### trace()

> **trace**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:107](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L107)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`trace`](../../interfaces/LoggerStrategy.md#trace)

***

### warn()

> **warn**(...`msgs`): `void`

Defined in: [business/service/logger-strategy/base.ts:95](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L95)

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../interfaces/LoggerStrategy.md).[`warn`](../../interfaces/LoggerStrategy.md#warn)

***

### LogLevelToInt()

> `static` **LogLevelToInt**(`logLevel`): `number`

Defined in: [business/service/logger-strategy/base.ts:49](https://github.com/beecode-rs/msh-logger/blob/829ea53a4bedee60d11f202a01ece6b01cec32fc/src/business/service/logger-strategy/base.ts#L49)

#### Parameters

##### logLevel

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

`number`
