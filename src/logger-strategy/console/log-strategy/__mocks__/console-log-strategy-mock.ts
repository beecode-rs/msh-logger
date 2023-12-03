import { jest } from '@jest/globals'

import { LogLevel } from '#/log-level'
import { ObjectType } from '#/logger-strategy'
import { ConsoleLogStrategy } from '#/logger-strategy/console/log-strategy'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = jest.fn<(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }) => unknown>()
}
