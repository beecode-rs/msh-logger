/* eslint-disable no-console */
import { typeUtil } from '@beecode/msh-util/type-util'

import { LogLevel } from '#src/business/model/log-level.js'
import { type FormattedLog } from '#src/business/service/formatting-strategy.js'
import { type TransportingStrategy } from '#src/business/service/transporting-strategy.js'

export class TransportingStrategyConsole implements TransportingStrategy {
	transport(log: FormattedLog): void {
		const fn = TransportingStrategyConsole.LevelToFn(log.level)

		fn(log.message)

		if (log.metadata) {
			fn(log.metadata)
		}
	}

	static LevelToFn(level: LogLevel): (...args: unknown[]) => void {
		switch (level) {
			case LogLevel.FATAL:
				return console.error
			case LogLevel.ERROR:
				return console.error
			case LogLevel.WARN:
				return console.warn
			case LogLevel.INFO:
				return console.info
			case LogLevel.DEBUG:
				return console.debug
			case LogLevel.TRACE:
				return console.log
			default:
				throw typeUtil.exhaustiveError(`Unknown level [${String(level)}]`, level)
		}
	}
}
