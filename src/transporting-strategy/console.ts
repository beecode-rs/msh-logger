/* eslint-disable no-console */
import { typeUtil } from '@beecode/msh-util/type-util'

import { type FormattedLog } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/log-level.js'
import { type TransportingStrategy } from '#src/transporting-strategy.js'

export class TransportingStrategyConsole implements TransportingStrategy {
	transport(log: FormattedLog): void {
		const fn = TransportingStrategyConsole.LevelToFn(log.level)
		const ts = new Date(log.timestamp).toISOString()

		fn(`${ts} - ${log.level}: ${log.message}`)

		if (log.meta) {
			fn(log.meta)
		}

		if (log.extra && Object.keys(log.extra).length > 0) {
			fn(log.extra)
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
				return console.log
			case LogLevel.TRACE:
				return console.log
			default:
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				throw typeUtil.exhaustiveError(`Unknown level [${level}]`, level)
		}
	}
}
