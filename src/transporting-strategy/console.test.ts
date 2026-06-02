import { afterAll, describe, expect, it, vi } from 'vitest'

import { type FormattedLog } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/log-level.js'
import { TransportingStrategyConsole } from '#src/transporting-strategy/console.js'

describe('TransportingStrategyConsole', () => {
	const spy_console_log = vi.spyOn(console, 'log').mockImplementation(() => undefined)
	const spy_console_info = vi.spyOn(console, 'info').mockImplementation(() => undefined)
	const spy_console_warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
	const spy_console_error = vi.spyOn(console, 'error').mockImplementation(() => undefined)
	const transporter = new TransportingStrategyConsole()

	afterAll(() => {
		vi.restoreAllMocks()
	})

	describe('transport', () => {
		it('should call console.log for DEBUG level', () => {
			const log: FormattedLog = { level: LogLevel.DEBUG, message: 'test', timestamp: new Date().getTime() }
			transporter.transport(log)
			expect(spy_console_log).toHaveBeenCalledTimes(1)
			expect(spy_console_log).toHaveBeenCalledWith(expect.stringContaining('DEBUG: test'))
		})

		it('should call console.info for INFO level', () => {
			const log: FormattedLog = { level: LogLevel.INFO, message: 'test', timestamp: new Date().getTime() }
			transporter.transport(log)
			expect(spy_console_info).toHaveBeenCalledTimes(1)
			expect(spy_console_info).toHaveBeenCalledWith(expect.stringContaining('INFO: test'))
		})

		it('should call console.warn for WARN level', () => {
			const log: FormattedLog = { level: LogLevel.WARN, message: 'test', timestamp: new Date().getTime() }
			transporter.transport(log)
			expect(spy_console_warn).toHaveBeenCalledTimes(1)
			expect(spy_console_warn).toHaveBeenCalledWith(expect.stringContaining('WARN: test'))
		})

		it('should call console.error for ERROR level', () => {
			const log: FormattedLog = { level: LogLevel.ERROR, message: 'test', timestamp: new Date().getTime() }
			transporter.transport(log)
			expect(spy_console_error).toHaveBeenCalledTimes(1)
			expect(spy_console_error).toHaveBeenCalledWith(expect.stringContaining('ERROR: test'))
		})

		it('should call console with meta separately', () => {
			const meta = { service: 'test' }
			const log: FormattedLog = { level: LogLevel.INFO, message: 'test', meta, timestamp: new Date().getTime() }
			transporter.transport(log)
			expect(spy_console_info).toHaveBeenCalledTimes(2)
			expect(spy_console_info).nthCalledWith(2, meta)
		})

		it('should call console with extra separately when non-empty', () => {
			const extra = { err: 'stack' }
			const log: FormattedLog = { extra, level: LogLevel.ERROR, message: 'test', timestamp: new Date().getTime() }
			transporter.transport(log)
			expect(spy_console_error).toHaveBeenCalledTimes(2)
			expect(spy_console_error).nthCalledWith(2, extra)
		})
	})

	describe('LevelToFn', () => {
		it.each([
			['log', LogLevel.DEBUG],
			['info', LogLevel.INFO],
			['warn', LogLevel.WARN],
			['error', LogLevel.ERROR],
		] as [string, LogLevel][])('should return %p for log level %s', (expected, level) => {
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
