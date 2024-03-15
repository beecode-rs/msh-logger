import { LogLevel } from '#src/log-level'
import { ObjectType } from '#src/logger-strategy'

export interface ConsoleLogStrategy {
	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): void
}
