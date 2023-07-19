import { LoggerStrategy, LoggerStrategyParams, StringOrObjectType } from '#/logger-strategy/index.js'

export class LoggerStrategyMock implements LoggerStrategy {
	clone = jest.fn<LoggerStrategyMock, [LoggerStrategyParams | undefined]>()

	/* eslint-disable @typescript-eslint/no-invalid-void-type */
	debug = jest.fn<void, StringOrObjectType[]>()
	error = jest.fn<void, StringOrObjectType[]>()
	info = jest.fn<void, StringOrObjectType[]>()
	warn = jest.fn<void, StringOrObjectType[]>()
	/* eslint-enable @typescript-eslint/no-invalid-void-type */
}
