import { LogLevel } from '#/log-level'
import { ObjectType } from '#/logger-strategy'

export interface ConsoleLogStrategy {
	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): void
}
