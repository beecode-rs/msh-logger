import { afterAll, describe, expect, it, vi } from 'vitest'

import { LogLevel } from '#src/log-level'
import { ConsoleLogStrategySimple } from '#src/logger-strategy/console/log-strategy/simple'

describe('SimpleConsoleLog', () => {
	const spy_console_log = vi.spyOn(console, 'log').mockImplementation(() => undefined)
	const spy_console_info = vi.spyOn(console, 'info').mockImplementation(() => undefined)
	const spy_console_warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
	const spy_console_error = vi.spyOn(console, 'error').mockImplementation(() => undefined)
	const simpleConsoleLog = new ConsoleLogStrategySimple()
	const mockDateTime = new Date()
	const mockDateTimeStr = mockDateTime.toISOString()

	afterAll(() => {
		vi.restoreAllMocks()
	})

	describe('log', () => {
		it('should call console.log with string', () => {
			const msg = 'test'
			simpleConsoleLog.log({ datetime: mockDateTime, type: LogLevel.DEBUG }, msg)
			expect(spy_console_log).toHaveBeenCalledTimes(1)
			expect(spy_console_log).toHaveBeenCalledWith(`${mockDateTimeStr} - DEBUG: `, msg)
		})

		it('should call console.warn with string', () => {
			const msg = 'test'
			simpleConsoleLog.log({ datetime: mockDateTime, type: LogLevel.WARN }, msg)
			expect(spy_console_warn).toHaveBeenCalledTimes(1)
			expect(spy_console_warn).toHaveBeenCalledWith(`${mockDateTimeStr} - WARN: `, msg)
		})

		it('should call console.warn with string and prefix', () => {
			const msg = 'test'
			const prefix = 'Prefix'
			simpleConsoleLog.log({ datetime: mockDateTime, prefix, type: LogLevel.WARN }, msg)
			expect(spy_console_warn).toHaveBeenCalledTimes(1)
			expect(spy_console_warn).toHaveBeenCalledWith(`${mockDateTimeStr} - WARN: ${prefix}`, msg)
		})

		it('should call console.warn with multiple string, prefix and meta', () => {
			const msg = 'test'
			const msg1 = 'test1'
			const prefix = 'Prefix'
			const meta = { m: 'test' }
			simpleConsoleLog.log({ datetime: mockDateTime, meta, prefix, type: LogLevel.WARN }, msg, msg1)
			expect(spy_console_warn).toHaveBeenCalledTimes(2)
			expect(spy_console_warn).nthCalledWith(1, `${mockDateTimeStr} - WARN: ${prefix}`, msg, msg1)
			expect(spy_console_warn).nthCalledWith(2, meta)
		})

		it('should call console.warn with multiple string', () => {
			const msg = 'test'
			const msg1 = 'test1'
			const msg2 = 'test2'
			simpleConsoleLog.log({ datetime: mockDateTime, type: LogLevel.WARN }, msg, msg1, msg2)
			expect(spy_console_warn).toHaveBeenCalledTimes(1)

			expect(spy_console_warn).nthCalledWith(1, `${mockDateTimeStr} - WARN: `, msg, msg1, msg2)
		})

		it('should call console.log with object', () => {
			const obj = { test: 'test' }
			simpleConsoleLog.log({ datetime: mockDateTime, type: LogLevel.INFO }, obj)
			expect(spy_console_info).toHaveBeenCalledTimes(1)
			expect(spy_console_info).toHaveBeenCalledWith(`${mockDateTimeStr} - INFO: `, obj)
		})

		it('should call console.log with two arguments (meta:object)', () => {
			const msg = 'test'
			const metaObj = { test: 'test' }
			simpleConsoleLog.log({ datetime: mockDateTime, meta: metaObj, type: LogLevel.ERROR }, msg)
			expect(spy_console_error).toHaveBeenCalledTimes(2)
			expect(spy_console_error).nthCalledWith(1, `${mockDateTimeStr} - ERROR: `, msg)
			expect(spy_console_error).nthCalledWith(2, metaObj)
		})

		it('should call console.log with multiple messages and meta', () => {
			const msg = 'test'
			const msg1 = 'test1'
			const metaObj = { test: 'test' }
			simpleConsoleLog.log({ datetime: mockDateTime, meta: metaObj, type: LogLevel.ERROR }, msg, msg1)
			expect(spy_console_error).toHaveBeenCalledTimes(2)
			expect(spy_console_error).nthCalledWith(1, `${mockDateTimeStr} - ERROR: `, msg, msg1)
			expect(spy_console_error).nthCalledWith(2, metaObj)
		})
	})

	describe('LogTypeToFunctionName', () => {
		it.each([
			['log', LogLevel.DEBUG],
			['info', LogLevel.INFO],
			['warn', LogLevel.WARN],
			['error', LogLevel.ERROR],
		] as [string, LogLevel][])(`should return %p for log level type %s`, (expected, type) => {
			expect(ConsoleLogStrategySimple.LogTypeToFunctionName(type)).toEqual(expected)
		})

		it('should throw error if wrong type passed', () => {
			try {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				ConsoleLogStrategySimple.LogTypeToFunctionName('dummyType' as any)
				throw new Error('LogTypeToFunctionNane did not fail')
			} catch (err) {
				if (!(err instanceof Error)) {
					throw err
				}
				expect(err.message).toEqual('Unknown log level type [dummyType]')
			}
		})
	})
})
