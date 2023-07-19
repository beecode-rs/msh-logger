import { LogLevel } from '#/log-level'
import { ObjectType, StringOrObjectType } from '#/logger-strategy/index'

export interface ConsoleLogStrategy {
	log(
		params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string },
		...messageObjects: StringOrObjectType[]
	): void
}
