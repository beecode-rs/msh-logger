import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { LogLevel } from '#src/log-level'
import { ConsoleLogStrategyPino } from '#src/logger-strategy/console/log-strategy/pino'

// Mock pino module
vi.mock('pino', () => {
	const mockLogger = {
		debug: vi.fn(),
		error: vi.fn(),
		info: vi.fn(),
		warn: vi.fn(),
	}

	return {
		__mockLogger: mockLogger,
		default: vi.fn(() => mockLogger),
	}
})

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { __mockLogger: mockLogger } = await vi.importMock<{ __mockLogger: Record<string, ReturnType<typeof vi.fn>> }>('pino')

describe('ConsoleLogStrategyPino', () => {
	const pinoConsoleLog = new ConsoleLogStrategyPino()
	const mockDateTime = new Date()
	const mockTimestamp = mockDateTime.getTime()

	beforeEach(() => {
		vi.clearAllMocks()
	})

	afterAll(() => {
		vi.restoreAllMocks()
	})

	describe('log', () => {
		it('should call pino.debug with string message', () => {
			const msg = 'test'
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.DEBUG }, msg)
			expect(mockLogger.debug).toHaveBeenCalledTimes(1)
			expect(mockLogger.debug).toHaveBeenCalledWith({ time: mockTimestamp }, msg)
		})

		it('should call pino.info with string message', () => {
			const msg = 'test'
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.INFO }, msg)
			expect(mockLogger.info).toHaveBeenCalledTimes(1)
			expect(mockLogger.info).toHaveBeenCalledWith({ time: mockTimestamp }, msg)
		})

		it('should call pino.warn with string message', () => {
			const msg = 'test'
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.WARN }, msg)
			expect(mockLogger.warn).toHaveBeenCalledTimes(1)
			expect(mockLogger.warn).toHaveBeenCalledWith({ time: mockTimestamp }, msg)
		})

		it('should call pino.error with string message', () => {
			const msg = 'test'
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.ERROR }, msg)
			expect(mockLogger.error).toHaveBeenCalledTimes(1)
			expect(mockLogger.error).toHaveBeenCalledWith({ time: mockTimestamp }, msg)
		})

		it('should call pino with object message', () => {
			const obj = { test: 'test' }
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.INFO }, obj)
			expect(mockLogger.info).toHaveBeenCalledTimes(1)
			expect(mockLogger.info).toHaveBeenCalledWith({ time: mockTimestamp }, JSON.stringify(obj))
		})

		it('should call pino with object message containing message property', () => {
			const obj = { message: 'test message' }
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.INFO }, obj)
			expect(mockLogger.info).toHaveBeenCalledTimes(1)
			expect(mockLogger.info).toHaveBeenCalledWith({ time: mockTimestamp }, 'test message')
		})

		it('should call pino with message and meta', () => {
			const msg = 'test'
			const metaObj = { requestId: 'abc', userId: '123' }
			pinoConsoleLog.log({ datetime: mockDateTime, meta: metaObj, type: LogLevel.DEBUG }, msg)
			expect(mockLogger.debug).toHaveBeenCalledTimes(1)
			expect(mockLogger.debug).toHaveBeenCalledWith({ ...metaObj, time: mockTimestamp }, msg)
		})

		it('should call pino with string message and prefix', () => {
			const msg = 'test'
			const prefix = 'Prefix'
			pinoConsoleLog.log({ datetime: mockDateTime, prefix, type: LogLevel.WARN }, msg)
			expect(mockLogger.warn).toHaveBeenCalledTimes(1)
			expect(mockLogger.warn).toHaveBeenCalledWith({ time: mockTimestamp }, `${prefix} ${msg}`)
		})

		it('should call pino with object message and prefix', () => {
			const obj = { test: 'test' }
			const prefix = 'Prefix'
			pinoConsoleLog.log({ datetime: mockDateTime, prefix, type: LogLevel.INFO }, obj)
			expect(mockLogger.info).toHaveBeenCalledTimes(1)
			expect(mockLogger.info).toHaveBeenCalledWith({ time: mockTimestamp }, `${prefix} ${JSON.stringify(obj)}`)
		})

		it('should call pino with object message containing message property and prefix', () => {
			const obj = { message: 'test message' }
			const prefix = 'Prefix'
			pinoConsoleLog.log({ datetime: mockDateTime, prefix, type: LogLevel.INFO }, obj)
			expect(mockLogger.info).toHaveBeenCalledTimes(1)
			expect(mockLogger.info).toHaveBeenCalledWith({ time: mockTimestamp }, `${prefix} ${obj.message}`)
		})

		it('should call pino with string message, prefix and meta', () => {
			const msg = 'test'
			const prefix = 'Prefix'
			const metaObj = { userId: '123' }
			pinoConsoleLog.log({ datetime: mockDateTime, meta: metaObj, prefix, type: LogLevel.ERROR }, msg)
			expect(mockLogger.error).toHaveBeenCalledTimes(1)
			expect(mockLogger.error).toHaveBeenCalledWith({ ...metaObj, time: mockTimestamp }, `${prefix} ${msg}`)
		})

		it('should call pino for each message when multiple messages are passed', () => {
			const msg1 = 'test1'
			const msg2 = 'test2'
			const msg3 = 'test3'
			pinoConsoleLog.log({ datetime: mockDateTime, type: LogLevel.DEBUG }, msg1, msg2, msg3)
			expect(mockLogger.debug).toHaveBeenCalledTimes(3)
			expect(mockLogger.debug).nthCalledWith(1, { time: mockTimestamp }, msg1)
			expect(mockLogger.debug).nthCalledWith(2, { time: mockTimestamp }, msg2)
			expect(mockLogger.debug).nthCalledWith(3, { time: mockTimestamp }, msg3)
		})

		it('should call pino for each message with meta when multiple messages are passed', () => {
			const msg1 = 'test1'
			const msg2 = 'test2'
			const metaObj = { userId: '123' }
			pinoConsoleLog.log({ datetime: mockDateTime, meta: metaObj, type: LogLevel.INFO }, msg1, msg2)
			expect(mockLogger.info).toHaveBeenCalledTimes(2)
			expect(mockLogger.info).nthCalledWith(1, { ...metaObj, time: mockTimestamp }, msg1)
			expect(mockLogger.info).nthCalledWith(2, { ...metaObj, time: mockTimestamp }, msg2)
		})

		it('should handle empty message with prefix only', () => {
			const prefix = 'Prefix'
			pinoConsoleLog.log({ datetime: mockDateTime, prefix, type: LogLevel.DEBUG }, '')
			expect(mockLogger.debug).toHaveBeenCalledTimes(1)
			expect(mockLogger.debug).toHaveBeenCalledWith({ time: mockTimestamp }, prefix)
		})
	})

	describe('LogLevelToFunctionName', () => {
		it.each([
			['debug', LogLevel.DEBUG],
			['info', LogLevel.INFO],
			['warn', LogLevel.WARN],
			['error', LogLevel.ERROR],
		] as [string, LogLevel][])('should return %p for log level type %s', (expected, type) => {
			expect(ConsoleLogStrategyPino.LogLevelToFunctionName(type)).toEqual(expected)
		})

		it('should throw error if wrong type passed', () => {
			try {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				ConsoleLogStrategyPino.LogLevelToFunctionName('dummyType' as any)
				throw new Error('LogLevelToFunctionName did not fail')
			} catch (err) {
				if (!(err instanceof Error)) {
					throw err
				}
				expect(err.message).toEqual('Unknown log level type [dummyType]')
			}
		})
	})
})
