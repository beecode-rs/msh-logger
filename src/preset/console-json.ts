import { FormattingStrategyJson } from '#src/formatting-strategy/json.js'
import { LoggerStrategyBase, type LoggerStrategyBaseParams } from '#src/logger-strategy/base.js'
import { TransportingStrategyConsole } from '#src/transporting-strategy/console.js'

export class PresetConsoleJson extends LoggerStrategyBase {
	constructor(params?: Omit<LoggerStrategyBaseParams, 'formattingStrategy' | 'transportingStrategy'>) {
		super({
			...params,
			formattingStrategy: new FormattingStrategyJson(),
			transportingStrategy: new TransportingStrategyConsole(),
		})
	}
}
