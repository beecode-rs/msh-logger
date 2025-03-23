import { jest } from 'vitest'

import { type LoggerStrategy, type LoggerStrategyParams } from '#src'

export class LoggerStrategyVoid implements LoggerStrategy {
	clone = jest.fn<(overrideParams?: LoggerStrategyParams) => LoggerStrategy>()

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	debug = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	error = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	info = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	warn = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
}
