import { LogLevel } from '#/log-level.js'
import { ObjectType, StringOrObjectType } from '#/logger-strategy/index.js'

export interface ConsoleLogStrategy {
	log(
		params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string },
		...messageObjects: StringOrObjectType[]
	): void
}
