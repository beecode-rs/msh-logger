import { FormattingStrategySimpleString } from '#src/formatting-strategy/simple-string.js'
import { LoggerStrategyBase, type LoggerStrategyBaseParams } from '#src/logger-strategy/base.js'
import { TransportingStrategyConsole } from '#src/transporting-strategy/console.js'

export class PresetConsoleSimpleString extends LoggerStrategyBase {
	constructor(params?: Omit<LoggerStrategyBaseParams, 'formattingStrategy' | 'transportingStrategy'>) {
		super({
			...params,
			formattingStrategy: new FormattingStrategySimpleString(),
			transportingStrategy: new TransportingStrategyConsole(),
		})
	}
}
