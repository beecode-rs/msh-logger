import { type LogLevel } from '#src/log-level.js'
import { type ObjectType } from '#src/logger-strategy.js'

export type FormattedLog = {
	level: LogLevel
	timestamp: number
	message: string
	prefix?: string
	meta?: ObjectType
	extra?: Record<string, unknown>
}

export interface FormattingStrategy {
	format(params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): FormattedLog[]
}
