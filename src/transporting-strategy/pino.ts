import { typeUtil } from '@beecode/msh-util/type-util'
import pino, { type Logger } from 'pino'

import { type FormattedLog } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/log-level.js'
import { type TransportingStrategy } from '#src/transporting-strategy.js'

export class TransportingStrategyPino implements TransportingStrategy {
	protected _logger: Logger

	constructor(logger?: Logger) {
		this._logger = logger ?? pino()
	}

	transport(log: FormattedLog): void {
		const fnName = TransportingStrategyPino.LevelToFn(log.level)
		const { message, meta, timestamp, extra, prefix } = log
		const logObject: Record<string, unknown> = { ...meta, time: timestamp }

		if (extra && Object.keys(extra).length > 0) {
			Object.assign(logObject, extra)
		}

		if (prefix) {
			logObject.prefix = prefix
		}

		this._logger[fnName](logObject, message)
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
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				throw typeUtil.exhaustiveError(`Unknown level [${level}]`, level)
		}
	}
}
