import { type LogLevel } from '#src/log-level.js'

export type ObjectType = Record<string, unknown>

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
