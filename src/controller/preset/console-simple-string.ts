import { FormattingStrategySimpleString } from '#src/business/service/formatting-strategy/simple-string.js'
import { LoggerStrategyBase, type LoggerStrategyBaseParams } from '#src/business/service/logger-strategy/base.js'
import { TransportingStrategyConsole } from '#src/business/service/transporting-strategy/console.js'

export class PresetConsoleSimpleString extends LoggerStrategyBase {
	constructor(params?: Omit<LoggerStrategyBaseParams, 'formattingStrategy' | 'transportingStrategy'>) {
		super({
			...params,
			formattingStrategy: new FormattingStrategySimpleString(),
			transportingStrategy: new TransportingStrategyConsole(),
		})
	}
}
