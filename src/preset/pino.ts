import { type Logger } from 'pino'

import { FormattingStrategyJson } from '#src/formatting-strategy/json.js'
import { LoggerStrategyBase, type LoggerStrategyBaseParams } from '#src/logger-strategy/base.js'
import { TransportingStrategyPino } from '#src/transporting-strategy/pino.js'

export type PresetPinoParams = Omit<LoggerStrategyBaseParams, 'formattingStrategy' | 'transportingStrategy'> & {
	pinoLogger?: Logger
}

export class PresetPino extends LoggerStrategyBase {
	constructor(params?: PresetPinoParams) {
		const { pinoLogger, ...rest } = params ?? {}

		super({
			...rest,
			formattingStrategy: new FormattingStrategyJson(),
			transportingStrategy: new TransportingStrategyPino(pinoLogger),
		})
	}
}
