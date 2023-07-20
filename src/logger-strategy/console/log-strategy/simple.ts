import { typeUtil } from '@beecode/msh-util/type-util'

import { LogLevel } from '#/log-level'
import { ConsoleLogStrategy } from '#/logger-strategy/console/log-strategy/index'
import { ObjectType, StringOrObjectType } from '#/logger-strategy/index'

export class ConsoleLogStrategySimple implements ConsoleLogStrategy {
	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: StringOrObjectType[]): void {
		const { type, meta, prefix, datetime = new Date() } = params
		const fnName = ConsoleLogStrategySimple.LogTypeToFunctionName(type)

		/* eslint-disable no-console*/
		msgs.forEach((msg, ix) => {
			if (ix === 0) {
				console[fnName](`${datetime.toISOString()} - ${type.toUpperCase()}: ${prefix ?? ''}`, msg)
			} else {
				console[fnName](msg)
			}
		})
		if (meta) {
			console[fnName](meta)
		}
		/* eslint-enable no-console*/
	}

	static LogTypeToFunctionName(type: LogLevel): 'log' | 'info' | 'warn' | 'error' {
		switch (type) {
			case LogLevel.ERROR:
				return 'error'
			case LogLevel.WARN:
				return 'warn'
			case LogLevel.INFO:
				return 'info'
			case LogLevel.DEBUG:
				return 'log'
			default:
				throw typeUtil.exhaustiveError(`Unknown log level type [${type}]`, type)
		}
	}
}
