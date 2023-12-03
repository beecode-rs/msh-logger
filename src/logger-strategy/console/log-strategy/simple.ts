import { typeUtil } from '@beecode/msh-util/type-util'

import { LogLevel } from '#/log-level'
import { ObjectType } from '#/logger-strategy'
import { ConsoleLogStrategy } from '#/logger-strategy/console/log-strategy'

export class ConsoleLogStrategySimple implements ConsoleLogStrategy {
	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): void {
		const { type, meta, prefix, datetime = new Date() } = params
		const fnName = ConsoleLogStrategySimple.LogTypeToFunctionName(type)

		/* eslint-disable no-console*/
		console[fnName](`${datetime.toISOString()} - ${type.toUpperCase()}: ${prefix ?? ''}`, ...msgs)
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
