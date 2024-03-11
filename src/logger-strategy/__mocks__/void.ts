import { jest } from '@jest/globals'

import { LoggerStrategy, LoggerStrategyParams } from '#'

export class LoggerStrategyVoid implements LoggerStrategy {
	clone = jest.fn<(overrideParams?: LoggerStrategyParams | undefined) => LoggerStrategy>()

	debug = jest.fn<(..._msgs: unknown[]) => void>()
	error = jest.fn<(..._msgs: unknown[]) => void>()
	info = jest.fn<(..._msgs: unknown[]) => void>()
	warn = jest.fn<(..._msgs: unknown[]) => void>()
}
