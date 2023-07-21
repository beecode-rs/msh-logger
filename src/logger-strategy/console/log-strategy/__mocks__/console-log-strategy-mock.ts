import { jest } from '@jest/globals'

import { LogLevel } from '#/log-level.js'
import { ConsoleLogStrategy } from '#/logger-strategy/console/log-strategy/index.js'
import { StringOrObjectType } from '#/logger-strategy/index.js'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = jest.fn<(params: { type: LogLevel; meta?: StringOrObjectType; datetime?: Date; prefix?: string }) => StringOrObjectType>()
}
