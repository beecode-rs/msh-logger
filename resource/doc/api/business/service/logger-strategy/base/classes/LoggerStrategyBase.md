[**@beecode/msh-logger**](../../../../../README.md)

***

[@beecode/msh-logger](../../../../../README.md) / [business/service/logger-strategy/base](../README.md) / LoggerStrategyBase

# Class: LoggerStrategyBase

Defined in: business/service/logger-strategy/base.ts:17

## Extended by

- [`PresetConsoleJson`](../../../../../controller/preset/console-json/classes/PresetConsoleJson.md)
- [`PresetConsoleSimpleString`](../../../../../controller/preset/console-simple-string/classes/PresetConsoleSimpleString.md)
- [`PresetPino`](../../../../../controller/preset/pino/classes/PresetPino.md)

## Implements

- [`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md)

## Constructors

### Constructor

> **new LoggerStrategyBase**(`params`): `LoggerStrategyBase`

Defined in: business/service/logger-strategy/base.ts:24

#### Parameters

##### params

[`LoggerStrategyBaseParams`](../type-aliases/LoggerStrategyBaseParams.md)

#### Returns

`LoggerStrategyBase`

## Properties

### \_category?

> `protected` `readonly` `optional` **\_category**: `string`

Defined in: business/service/logger-strategy/base.ts:21

***

### \_formattingStrategy

> `protected` `readonly` **\_formattingStrategy**: [`FormattingStrategy`](../../../../model/formatting-strategy/interfaces/FormattingStrategy.md)

Defined in: business/service/logger-strategy/base.ts:19

***

### \_logLevel

> `protected` `readonly` **\_logLevel**: [`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

Defined in: business/service/logger-strategy/base.ts:18

***

### \_meta?

> `protected` `readonly` `optional` **\_meta**: [`ObjectType`](../../../../../util/object-util/type-aliases/ObjectType.md)

Defined in: business/service/logger-strategy/base.ts:22

***

### \_transportingStrategy

> `protected` `readonly` **\_transportingStrategy**: [`TransportingStrategy`](../../../../model/transporting-strategy/interfaces/TransportingStrategy.md)

Defined in: business/service/logger-strategy/base.ts:20

## Methods

### \_logMessage()

> `protected` **\_logMessage**(`type`, ...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:68

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

Defined in: business/service/logger-strategy/base.ts:64

#### Parameters

##### currentLevel

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

`boolean`

***

### clone()

> **clone**(`params?`): `LoggerStrategyBase`

Defined in: business/service/logger-strategy/base.ts:33

#### Parameters

##### params?

[`LoggerStrategyParams`](../../../../model/logger-strategy/type-aliases/LoggerStrategyParams.md)

#### Returns

`LoggerStrategyBase`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`clone`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#clone)

***

### debug()

> **debug**(...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:99

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`debug`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#debug)

***

### error()

> **error**(...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:87

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`error`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#error)

***

### fatal()

> **fatal**(...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:83

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`fatal`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#fatal)

***

### info()

> **info**(...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:95

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`info`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#info)

***

### trace()

> **trace**(...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:103

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`trace`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#trace)

***

### warn()

> **warn**(...`msgs`): `void`

Defined in: business/service/logger-strategy/base.ts:91

#### Parameters

##### msgs

...`unknown`[]

#### Returns

`void`

#### Implementation of

[`LoggerStrategy`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md).[`warn`](../../../../model/logger-strategy/interfaces/LoggerStrategy.md#warn)

***

### LogLevelToInt()

> `static` **LogLevelToInt**(`logLevel`): `number`

Defined in: business/service/logger-strategy/base.ts:45

#### Parameters

##### logLevel

[`LogLevel`](../../../../model/log-level/enumerations/LogLevel.md)

#### Returns

`number`
