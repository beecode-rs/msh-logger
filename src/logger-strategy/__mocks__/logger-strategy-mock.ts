import { LoggerStrategy, LoggerStrategyParams } from '#/logger-strategy'

export class LoggerStrategyMock implements LoggerStrategy {
	clone = jest.fn<LoggerStrategyMock, [LoggerStrategyParams | undefined]>()

	/* eslint-disable @typescript-eslint/no-invalid-void-type */
	debug = jest.fn<void, unknown[]>()
	error = jest.fn<void, unknown[]>()
	info = jest.fn<void, unknown[]>()
	warn = jest.fn<void, unknown[]>()
	/* eslint-enable @typescript-eslint/no-invalid-void-type */
}
