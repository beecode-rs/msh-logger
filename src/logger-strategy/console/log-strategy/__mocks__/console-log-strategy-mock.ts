import { jest } from '@jest/globals'
import { LogLevel } from 'src/log-level'
import { StringOrObjectType } from 'src/logger-strategy'
import { ConsoleLogStrategy } from 'src/logger-strategy/console/log-strategy'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = jest.fn<(params: { type: LogLevel; meta?: StringOrObjectType; datetime?: Date; prefix?: string }) => StringOrObjectType>()
}
