import { LoggerStrategy, LoggerStrategyParams, StringOrObjectType } from '#/logger-strategy/index'

export class LoggerStrategyMock implements LoggerStrategy {
	clone = jest.fn<LoggerStrategyMock, [LoggerStrategyParams | undefined]>()

	debug = jest.fn<void, StringOrObjectType[]>()
	error = jest.fn<void, StringOrObjectType[]>()
	info = jest.fn<void, StringOrObjectType[]>()
	warn = jest.fn<void, StringOrObjectType[]>()
}
