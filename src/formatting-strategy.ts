import { type LogLevel } from '#src/log-level.js'
import { type ObjectType } from '#src/logger-strategy.js'

export type FormattedLog = {
	level: LogLevel
	message: string
	metadata?: ObjectType
}

export interface FormattingStrategy {
	format(
		params: { level: LogLevel; meta?: ObjectType; timestamp?: number; category?: string },
		...msgs: unknown[]
	): FormattedLog[]
}
