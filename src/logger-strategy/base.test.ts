import { type Mock, afterAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { FormattingStrategyMock } from '#src/formatting-strategy/__mocks__/formatting-strategy-mock.js'
import { FormattingStrategySimpleString } from '#src/formatting-strategy/simple-string.js'
import { LogLevel } from '#src/log-level.js'
import { LoggerStrategyBase } from '#src/logger-strategy/base.js'
import { TransportingStrategyMock } from '#src/transporting-strategy/__mocks__/transporting-strategy-mock.js'
import { TransportingStrategyConsole } from '#src/transporting-strategy/console.js'

describe('LoggerStrategyBase', () => {
	describe('LogLevelToInt', () => {
		it('should return 60 for fatal', () => {
			expect(LoggerStrategyBase.LogLevelToInt(LogLevel.FATAL)).toEqual(60)
		})
		it('should return 50 for error', () => {
			expect(LoggerStrategyBase.LogLevelToInt(LogLevel.ERROR)).toEqual(50)
		})
		it('should return 40 for warn', () => {
			expect(LoggerStrategyBase.LogLevelToInt(LogLevel.WARN)).toEqual(40)
		})
		it('should return 30 for info', () => {
			expect(LoggerStrategyBase.LogLevelToInt(LogLevel.INFO)).toEqual(30)
		})
		it('should return 20 for debug', () => {
			expect(LoggerStrategyBase.LogLevelToInt(LogLevel.DEBUG)).toEqual(20)
		})
		it('should return 10 for trace', () => {
			expect(LoggerStrategyBase.LogLevelToInt(LogLevel.TRACE)).toEqual(10)
		})
		it('should throw error if unknown level passed', () => {
			const notALogLevel = 'not a log level'
			try {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				expect(LoggerStrategyBase.LogLevelToInt(notALogLevel as any)).toEqual(1)
				throw new Error('LogLevelToInt did not throw error')
			} catch (err) {
				if (!(err instanceof Error)) {
					throw err
				}
				expect(err.message).toEqual(`Unknown log lever [${notALogLevel}]`)
			}
		})
	})

	describe('_shouldLog', () => {
		const { FATAL, ERROR, WARN, INFO, DEBUG, TRACE } = LogLevel
		const testCases: [LogLevel, LogLevel, boolean][] = [
			[FATAL, FATAL, true],
			[FATAL, ERROR, false],
			[FATAL, WARN, false],
			[FATAL, INFO, false],
			[FATAL, DEBUG, false],
			[FATAL, TRACE, false],

			[ERROR, FATAL, true],
			[ERROR, ERROR, true],
			[ERROR, WARN, false],
			[ERROR, INFO, false],
			[ERROR, DEBUG, false],
			[ERROR, TRACE, false],

			[WARN, FATAL, true],
			[WARN, ERROR, true],
			[WARN, WARN, true],
			[WARN, INFO, false],
			[WARN, DEBUG, false],
			[WARN, TRACE, false],

			[INFO, FATAL, true],
			[INFO, ERROR, true],
			[INFO, WARN, true],
			[INFO, INFO, true],
			[INFO, DEBUG, false],
			[INFO, TRACE, false],

			[DEBUG, FATAL, true],
			[DEBUG, ERROR, true],
			[DEBUG, WARN, true],
			[DEBUG, INFO, true],
			[DEBUG, DEBUG, true],
			[DEBUG, TRACE, false],

			[TRACE, FATAL, true],
			[TRACE, ERROR, true],
			[TRACE, WARN, true],
			[TRACE, INFO, true],
			[TRACE, DEBUG, true],
			[TRACE, TRACE, true],
		]

		it.each(testCases)(
			'should decide to log message if config level is %s and message level is %s as %s',
			(confLevel, msgLevel, shouldLog) => {
				const logger = new LoggerStrategyBase({
					formattingStrategy: new FormattingStrategySimpleString(),
					logLevel: confLevel,
					transportingStrategy: new TransportingStrategyConsole(),
				})
				expect(logger['_shouldLog'](msgLevel)).toEqual(shouldLog)
			}
		)
	})

	describe('_logMessage', () => {
		let spy_logger_shouldLog: Mock

		const formattingStrategy = new FormattingStrategyMock()
		const transportingStrategy = new TransportingStrategyMock()
		const logMessageLogger = new LoggerStrategyBase({ formattingStrategy, transportingStrategy })

		beforeEach(() => {
			formattingStrategy.format.mockReturnValue([{ level: LogLevel.ERROR, message: 'mock' }])
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			spy_logger_shouldLog = vi.spyOn(logMessageLogger, '_shouldLog' as any)
		})
		afterAll(() => {
			vi.restoreAllMocks()
		})

		it('should not log messages if shouldLog returns false', () => {
			spy_logger_shouldLog.mockReturnValue(false)
			logMessageLogger['_logMessage'](LogLevel.ERROR, 'test message')
			expect(spy_logger_shouldLog).toHaveBeenCalledTimes(1)
			expect(spy_logger_shouldLog).toHaveBeenCalledWith(LogLevel.ERROR)
			expect(formattingStrategy.format).not.toHaveBeenCalled()
			expect(transportingStrategy.transport).not.toHaveBeenCalled()
		})

		it('should format and transport message when shouldLog returns true', () => {
			spy_logger_shouldLog.mockReturnValue(true)
			logMessageLogger['_logMessage'](LogLevel.ERROR, 'test message')
			expect(spy_logger_shouldLog).toHaveBeenCalledTimes(1)
			expect(spy_logger_shouldLog).toHaveBeenCalledWith(LogLevel.ERROR)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.ERROR, meta: undefined, timestamp: expect.any(Number) },
				'test message'
			)
		})
	})

	describe('public functions', () => {
		const formattingStrategy = new FormattingStrategyMock()
		const transportingStrategy = new TransportingStrategyMock()
		const logger = new LoggerStrategyBase({ formattingStrategy, logLevel: LogLevel.TRACE, transportingStrategy })

		const dummyMessage = 'dummy message'
		const dummyObject = { dummy: 'object' }

		beforeEach(() => {
			formattingStrategy.format.mockReturnValue([{ level: LogLevel.DEBUG, message: 'mock' }])
		})
		afterAll(() => {
			vi.restoreAllMocks()
		})

		it('should call _logMessage with fatal level for fatal', () => {
			logger.fatal(dummyMessage, dummyObject)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.FATAL, meta: undefined, timestamp: expect.any(Number) },
				dummyMessage,
				dummyObject
			)
		})

		it('should call _logMessage with error level for error', () => {
			logger.error(dummyMessage, dummyObject)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.ERROR, meta: undefined, timestamp: expect.any(Number) },
				dummyMessage,
				dummyObject
			)
		})

		it('should call _logMessage with warn level for warn', () => {
			logger.warn(dummyMessage, dummyObject)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.WARN, meta: undefined, timestamp: expect.any(Number) },
				dummyMessage,
				dummyObject
			)
		})

		it('should call _logMessage with info level for info', () => {
			logger.info(dummyMessage, dummyObject)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.INFO, meta: undefined, timestamp: expect.any(Number) },
				dummyMessage,
				dummyObject
			)
		})

		it('should call _logMessage with debug level for debug', () => {
			logger.debug(dummyMessage, dummyObject)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.DEBUG, meta: undefined, timestamp: expect.any(Number) },
				dummyMessage,
				dummyObject
			)
		})

		it('should call _logMessage with trace level for trace', () => {
			logger.trace(dummyMessage, dummyObject)
			expect(formattingStrategy.format).toHaveBeenCalledTimes(1)
			expect(formattingStrategy.format).toHaveBeenCalledWith(
				{ category: undefined, level: LogLevel.TRACE, meta: undefined, timestamp: expect.any(Number) },
				dummyMessage,
				dummyObject
			)
		})
	})
})
