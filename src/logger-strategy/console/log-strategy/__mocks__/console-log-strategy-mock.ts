import { jest } from '@jest/globals'

import { LogLevel } from '#/log-level'
import { ConsoleLogStrategy } from '#/logger-strategy/console/log-strategy/index'
import { StringOrObjectType } from '#/logger-strategy/index'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = jest.fn<(params: { type: LogLevel; meta?: StringOrObjectType; datetime?: Date; prefix?: string }) => StringOrObjectType>()
}
