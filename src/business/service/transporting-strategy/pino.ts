import { typeUtil } from '@beecode/msh-util/type-util'
import pino, { type Logger } from 'pino'

import { LogLevel } from '#src/business/model/log-level.js'
import { type FormattedLog } from '#src/business/service/formatting-strategy.js'
import { type TransportingStrategy } from '#src/business/service/transporting-strategy.js'

export class TransportingStrategyPino implements TransportingStrategy {
	protected _logger: Logger

	constructor(logger?: Logger) {
		this._logger = logger ?? pino()
	}

	transport(log: FormattedLog): void {
		const fnName = TransportingStrategyPino.LevelToFn(log.level)

		this._logger[fnName](log.metadata ?? {}, log.message)
	}

	static LevelToFn(level: LogLevel): 'fatal' | 'error' | 'info' | 'debug' | 'warn' | 'trace' {
		switch (level) {
			case LogLevel.FATAL:
				return 'fatal'
			case LogLevel.ERROR:
				return 'error'
			case LogLevel.WARN:
				return 'warn'
			case LogLevel.INFO:
				return 'info'
			case LogLevel.DEBUG:
				return 'debug'
			case LogLevel.TRACE:
				return 'trace'
			default:
				throw typeUtil.exhaustiveError(`Unknown level [${String(level)}]`, level)
		}
	}
}
