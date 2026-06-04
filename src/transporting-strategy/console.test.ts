import { afterAll, describe, expect, it, vi } from 'vitest'

import { type FormattedLog } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/log-level.js'
import { TransportingStrategyConsole } from '#src/transporting-strategy/console.js'

describe('TransportingStrategyConsole', () => {
	const spy_console_log = vi.spyOn(console, 'log').mockImplementation(() => undefined)
	const spy_console_debug = vi.spyOn(console, 'debug').mockImplementation(() => undefined)
	const spy_console_info = vi.spyOn(console, 'info').mockImplementation(() => undefined)
	const spy_console_warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
	const spy_console_error = vi.spyOn(console, 'error').mockImplementation(() => undefined)
	const transporter = new TransportingStrategyConsole()

	afterAll(() => {
		vi.restoreAllMocks()
	})

	describe('transport', () => {
		it('should call console.debug for DEBUG level', () => {
			const log: FormattedLog = { level: LogLevel.DEBUG, message: '2025-01-01T00:00:00.000Z - DEBUG: test' }
			transporter.transport(log)
			expect(spy_console_debug).toHaveBeenCalledTimes(1)
			expect(spy_console_debug).toHaveBeenCalledWith('2025-01-01T00:00:00.000Z - DEBUG: test')
		})

		it('should call console.info for INFO level', () => {
			const log: FormattedLog = { level: LogLevel.INFO, message: '2025-01-01T00:00:00.000Z - INFO: test' }
			transporter.transport(log)
			expect(spy_console_info).toHaveBeenCalledTimes(1)
			expect(spy_console_info).toHaveBeenCalledWith('2025-01-01T00:00:00.000Z - INFO: test')
		})

		it('should call console.warn for WARN level', () => {
			const log: FormattedLog = { level: LogLevel.WARN, message: '2025-01-01T00:00:00.000Z - WARN: test' }
			transporter.transport(log)
			expect(spy_console_warn).toHaveBeenCalledTimes(1)
			expect(spy_console_warn).toHaveBeenCalledWith('2025-01-01T00:00:00.000Z - WARN: test')
		})

		it('should call console.error for ERROR level', () => {
			const log: FormattedLog = { level: LogLevel.ERROR, message: '2025-01-01T00:00:00.000Z - ERROR: test' }
			transporter.transport(log)
			expect(spy_console_error).toHaveBeenCalledTimes(1)
			expect(spy_console_error).toHaveBeenCalledWith('2025-01-01T00:00:00.000Z - ERROR: test')
		})

		it('should call console with metadata separately', () => {
			const metadata = { service: 'test' }
			const log: FormattedLog = { level: LogLevel.INFO, message: '2025-01-01T00:00:00.000Z - INFO: test', metadata }
			transporter.transport(log)
			expect(spy_console_info).toHaveBeenCalledTimes(2)
			expect(spy_console_info).nthCalledWith(2, metadata)
		})
	})

	describe('LevelToFn', () => {
		it.each([
			['debug', LogLevel.DEBUG],
			['info', LogLevel.INFO],
			['warn', LogLevel.WARN],
			['error', LogLevel.ERROR],
		] as [string, LogLevel][])('should return %s for log level %s', (expected, level) => {
			const fn = TransportingStrategyConsole.LevelToFn(level)
			expect(fn.name).toEqual(expected)
		})

		it('should throw error if unknown level passed', () => {
			try {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				TransportingStrategyConsole.LevelToFn('dummy' as any)
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
