import { typeUtil } from '@beecode/msh-util/type-util'
import pino, { type Logger } from 'pino'

import { LogLevel } from '#src/log-level.js'
import { type ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy.js'
import { type ObjectType } from '#src/logger-strategy.js'

export class ConsoleLogStrategyPino implements ConsoleLogStrategy {
	protected _logger: Logger

	constructor() {
		this._logger = pino()
	}

	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): void {
		const { type, meta, prefix, datetime = new Date() } = params
		const fnName = ConsoleLogStrategyPino.LogLevelToFunctionName(type)

		msgs.forEach((msg) => {
			const message = this._formatMessage(msg, prefix)
			const logObject = {
				...meta,
				time: datetime.getTime(),
			}
			this._logger[fnName](logObject, message)
		})
	}

	protected _formatMessage(msg: unknown, prefix?: string): string {
		if (!msg) {
			return prefix ?? ''
		}

		if (typeof msg === 'object') {
			const { message } = msg as { message?: string }

			return this._joinDefined(prefix, message ?? JSON.stringify(msg))
		}

		if (typeof msg === 'string') {
			return this._joinDefined(prefix, msg)
		}

		// eslint-disable-next-line @typescript-eslint/no-base-to-string -- msg is a primitive at this point (string/object cases handled above)
		return this._joinDefined(prefix, String(msg))
	}

	protected _joinDefined(prefix?: string, msg?: string): string {
		return [prefix, msg].filter(Boolean).join(' ')
	}

	static LogLevelToFunctionName(type: LogLevel): 'error' | 'warn' | 'info' | 'debug' {
		switch (type) {
			case LogLevel.ERROR:
				return 'error'
			case LogLevel.WARN:
				return 'warn'
			case LogLevel.INFO:
				return 'info'
			case LogLevel.DEBUG:
				return 'debug'
			default:
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				throw typeUtil.exhaustiveError(`Unknown log level type [${type}]`, type)
		}
	}
}
