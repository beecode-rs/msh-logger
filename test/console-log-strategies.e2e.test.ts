import { LogLevel } from '@beecode/msh-logger/log-level'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'
import { ConsoleLogStrategyNewRelicJson } from '@beecode/msh-logger/logger-strategy/console/log-strategy/new-relic-json'
import { ConsoleLogStrategyPino } from '@beecode/msh-logger/logger-strategy/console/log-strategy/pino'
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/logger-strategy/console/log-strategy/simple'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// Mock pino for testing
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
const { __mockLogger: mockPinoLogger } = await vi.importMock<{ __mockLogger: Record<string, ReturnType<typeof vi.fn>> }>('pino')

describe('Console Log Strategies E2E', () => {
	let consoleLogSpy: ReturnType<typeof vi.spyOn>
	let consoleInfoSpy: ReturnType<typeof vi.spyOn>
	let consoleWarnSpy: ReturnType<typeof vi.spyOn>
	let consoleErrorSpy: ReturnType<typeof vi.spyOn>

	beforeEach(() => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		consoleInfoSpy = vi.spyOn(console, 'info').mockImplementation(() => {})
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
		vi.clearAllMocks()
	})

	describe('ConsoleLogStrategySimple', () => {
		it('should log all log levels correctly', () => {
			const logger = new LoggerStrategyConsole({
				consoleLogStrategy: new ConsoleLogStrategySimple(),
				logLevel: LogLevel.DEBUG,
			})

			logger.debug('Debug message')
			logger.info('Info message')
			logger.warn('Warn message')
			logger.error('Error message')

			expect(consoleLogSpy).toHaveBeenCalled()
			expect(consoleLogSpy.mock.calls[0][0]).toContain('DEBUG')
			expect(consoleLogSpy.mock.calls[0]).toContain('Debug message')

			expect(consoleInfoSpy).toHaveBeenCalled()
			expect(consoleInfoSpy.mock.calls[0][0]).toContain('INFO')
			expect(consoleInfoSpy.mock.calls[0]).toContain('Info message')

			expect(consoleWarnSpy).toHaveBeenCalled()
			expect(consoleWarnSpy.mock.calls[0][0]).toContain('WARN')
			expect(consoleWarnSpy.mock.calls[0]).toContain('Warn message')

			expect(consoleErrorSpy).toHaveBeenCalled()
			expect(consoleErrorSpy.mock.calls[0][0]).toContain('ERROR')
			expect(consoleErrorSpy.mock.calls[0]).toContain('Error message')
		})

		it('should log with prefix and meta', () => {
			const logger = new LoggerStrategyConsole({
				consoleLogStrategy: new ConsoleLogStrategySimple(),
				logLevel: LogLevel.DEBUG,
				messagePrefix: '[TEST]',
				meta: { service: 'test-service' },
			})

			logger.info('Test message')

			expect(consoleInfoSpy).toHaveBeenCalledTimes(2) // message + meta
			expect(consoleInfoSpy.mock.calls[0][0]).toContain('[TEST]')
			expect(consoleInfoSpy.mock.calls[0]).toContain('Test message')
			expect(consoleInfoSpy.mock.calls[1]).toEqual([{ service: 'test-service' }])
		})
	})

	describe('ConsoleLogStrategyNewRelicJson', () => {
		it('should log all log levels correctly in JSON format', () => {
			const strategy = new ConsoleLogStrategyNewRelicJson()

			strategy.log({ type: LogLevel.DEBUG }, 'Debug message')
			strategy.log({ type: LogLevel.INFO }, 'Info message')
			strategy.log({ type: LogLevel.WARN }, 'Warn message')
			strategy.log({ type: LogLevel.ERROR }, 'Error message')

			expect(consoleLogSpy).toHaveBeenCalledTimes(4)

			// NewRelicJson outputs structured JSON strings - verify they contain expected data
			expect(consoleLogSpy.mock.calls[0][0]).toContain('DEBUG')
			expect(consoleLogSpy.mock.calls[0][0]).toContain('Debug message')

			expect(consoleLogSpy.mock.calls[1][0]).toContain('INFO')
			expect(consoleLogSpy.mock.calls[1][0]).toContain('Info message')

			expect(consoleLogSpy.mock.calls[2][0]).toContain('WARN')
			expect(consoleLogSpy.mock.calls[2][0]).toContain('Warn message')

			expect(consoleLogSpy.mock.calls[3][0]).toContain('ERROR')
			expect(consoleLogSpy.mock.calls[3][0]).toContain('Error message')
		})

		it('should log with prefix and meta in JSON format', () => {
			const strategy = new ConsoleLogStrategyNewRelicJson()

			strategy.log(
				{
					meta: { service: 'test-service', version: '1.0.0' },
					prefix: '[TEST]',
					type: LogLevel.INFO,
				},
				'Test message'
			)

			expect(consoleLogSpy).toHaveBeenCalledTimes(1)

			// Verify the log output contains the expected data
			const logOutput = consoleLogSpy.mock.calls[0][0] as string
			expect(logOutput).toContain('INFO')
			expect(logOutput).toContain('[TEST] Test message')
			expect(logOutput).toContain('test-service')
			expect(logOutput).toContain('1.0.0')
		})
	})

	describe('ConsoleLogStrategyPino', () => {
		it('should log all log levels correctly using Pino', () => {
			const logger = new LoggerStrategyConsole({
				consoleLogStrategy: new ConsoleLogStrategyPino(),
				logLevel: LogLevel.DEBUG,
			})

			logger.debug('Debug message')
			logger.info('Info message')
			logger.warn('Warn message')
			logger.error('Error message')

			// Verify Pino logger methods were called
			expect(mockPinoLogger.debug).toHaveBeenCalledTimes(1)
			expect(mockPinoLogger.debug).toHaveBeenCalledWith(expect.objectContaining({ time: expect.any(Number) }), 'Debug message')

			expect(mockPinoLogger.info).toHaveBeenCalledTimes(1)
			expect(mockPinoLogger.info).toHaveBeenCalledWith(expect.objectContaining({ time: expect.any(Number) }), 'Info message')

			expect(mockPinoLogger.warn).toHaveBeenCalledTimes(1)
			expect(mockPinoLogger.warn).toHaveBeenCalledWith(expect.objectContaining({ time: expect.any(Number) }), 'Warn message')

			expect(mockPinoLogger.error).toHaveBeenCalledTimes(1)
			expect(mockPinoLogger.error).toHaveBeenCalledWith(expect.objectContaining({ time: expect.any(Number) }), 'Error message')
		})

		it('should log with prefix and meta using Pino', () => {
			const logger = new LoggerStrategyConsole({
				consoleLogStrategy: new ConsoleLogStrategyPino(),
				logLevel: LogLevel.INFO,
				messagePrefix: '[TEST]',
				meta: { service: 'test-service', version: '1.0.0' },
			})

			logger.info('Test message')

			expect(mockPinoLogger.info).toHaveBeenCalledTimes(1)
			expect(mockPinoLogger.info).toHaveBeenCalledWith(
				expect.objectContaining({
					service: 'test-service',
					time: expect.any(Number),
					version: '1.0.0',
				}),
				'[TEST] Test message'
			)
		})
	})
})
