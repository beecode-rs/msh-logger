import { jest } from '@jest/globals'

import { LoggerStrategyParams, LoggerStrategy as LoggerStrategyToMock } from '#/logger-strategy'

export class LoggerStrategy implements LoggerStrategyToMock {
	clone = jest.fn<(overrideParams?: LoggerStrategyParams | undefined) => LoggerStrategy>()

	debug = jest.fn<(..._msgs: unknown[]) => void>()
	error = jest.fn<(..._msgs: unknown[]) => void>()
	info = jest.fn<(..._msgs: unknown[]) => void>()
	warn = jest.fn<(..._msgs: unknown[]) => void>()
}
