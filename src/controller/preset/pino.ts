import { type Logger } from 'pino'

import { FormattingStrategyJson } from '#src/business/service/formatting-strategy/json.js'
import { LoggerStrategyBase, type LoggerStrategyBaseParams } from '#src/business/service/logger-strategy/base.js'
import { TransportingStrategyPino } from '#src/business/service/transporting-strategy/pino.js'

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
