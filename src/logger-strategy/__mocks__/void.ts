import { jest } from 'vitest'

import { LoggerStrategy, LoggerStrategyParams } from '#src'

export class LoggerStrategyVoid implements LoggerStrategy {
	clone = jest.fn<(overrideParams?: LoggerStrategyParams | undefined) => LoggerStrategy>()

	debug = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
	error = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
	info = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
	warn = jest.fn<(..._msgs: unknown[]) => void>().mockImplementation((_msg: unknown) => {})
}
