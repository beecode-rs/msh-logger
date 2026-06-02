import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { LogLevel } from '#src/log-level.js'
import { TransportingStrategyPino } from '#src/transporting-strategy/pino.js'

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

describe('TransportingStrategyPino', () => {
	const transporter = new TransportingStrategyPino()

	beforeEach(() => {
		vi.clearAllMocks()
	})

	afterAll(() => {
		vi.restoreAllMocks()
	})

	describe('transport', () => {
		it('should call pino.debug for DEBUG level', () => {
			transporter.transport({ level: LogLevel.DEBUG, message: 'test', timestamp: 1000 })
			expect(mockLogger.debug).toHaveBeenCalledTimes(1)
			expect(mockLogger.debug).toHaveBeenCalledWith({ time: 1000 }, 'test')
		})

		it('should call pino.info for INFO level', () => {
			transporter.transport({ level: LogLevel.INFO, message: 'test', timestamp: 1000 })
			expect(mockLogger.info).toHaveBeenCalledTimes(1)
			expect(mockLogger.info).toHaveBeenCalledWith({ time: 1000 }, 'test')
		})

		it('should call pino.warn for WARN level', () => {
			transporter.transport({ level: LogLevel.WARN, message: 'test', timestamp: 1000 })
			expect(mockLogger.warn).toHaveBeenCalledTimes(1)
			expect(mockLogger.warn).toHaveBeenCalledWith({ time: 1000 }, 'test')
		})

		it('should call pino.error for ERROR level', () => {
			transporter.transport({ level: LogLevel.ERROR, message: 'test', timestamp: 1000 })
			expect(mockLogger.error).toHaveBeenCalledTimes(1)
			expect(mockLogger.error).toHaveBeenCalledWith({ time: 1000 }, 'test')
		})

		it('should include meta in log object', () => {
			const meta = { requestId: 'abc', userId: '123' }
			transporter.transport({ level: LogLevel.DEBUG, message: 'test', meta, timestamp: 1000 })
			expect(mockLogger.debug).toHaveBeenCalledWith({ ...meta, time: 1000 }, 'test')
		})

		it('should include prefix and extra in log object', () => {
			transporter.transport({
				extra: { err: 'stack' },
				level: LogLevel.ERROR,
				message: 'test',
				prefix: '[app]',
				timestamp: 1000,
			})
			expect(mockLogger.error).toHaveBeenCalledWith({ err: 'stack', prefix: '[app]', time: 1000 }, 'test')
		})
	})

	describe('LevelToFn', () => {
		it.each([
			['debug', LogLevel.DEBUG],
			['info', LogLevel.INFO],
			['warn', LogLevel.WARN],
			['error', LogLevel.ERROR],
		] as [string, LogLevel][])('should return %p for log level %s', (expected, level) => {
			expect(TransportingStrategyPino.LevelToFn(level)).toEqual(expected)
		})

		it('should throw error if unknown level passed', () => {
			try {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				TransportingStrategyPino.LevelToFn('dummy' as any)
				throw new Error('LevelToFn did not throw error')
			} catch (err) {
				if (!(err instanceof Error)) {
					throw err
				}
				expect(err.message).toEqual('Unknown level [dummy]')
			}
		})
	})
})
