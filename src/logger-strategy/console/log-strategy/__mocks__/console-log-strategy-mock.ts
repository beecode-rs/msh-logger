import { jest } from '@jest/globals'
import { LogLevel } from 'src/log-level'
import { ObjectType } from 'src/logger-strategy'
import { ConsoleLogStrategy } from 'src/logger-strategy/console/log-strategy'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = jest.fn<(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }) => unknown>()
}
