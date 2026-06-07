import { type LogLevel } from '#src/business/model/log-level.js'
import { type ObjectType } from '#src/util/object-util.js'

export type { ObjectType }

export type LoggerStrategyParams = {
	logLevel?: LogLevel
	category?: string
	meta?: ObjectType
}

export interface LoggerStrategy {
	fatal(...msgs: unknown[]): void
	error(...msgs: unknown[]): void
	warn(...msgs: unknown[]): void
	info(...msgs: unknown[]): void
	debug(...msgs: unknown[]): void
	trace(...msgs: unknown[]): void
	clone(overrideParams?: LoggerStrategyParams): LoggerStrategy
}
