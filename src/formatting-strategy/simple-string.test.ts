import { describe, expect, it } from 'vitest'

import { FormattingStrategySimpleString } from '#src/formatting-strategy/simple-string.js'
import { LogLevel } from '#src/log-level.js'

describe('FormattingStrategySimpleString', () => {
	const formatter = new FormattingStrategySimpleString()
	const mockDateTime = new Date()
	const mockTimestamp = mockDateTime.getTime()

	describe('format', () => {
		it('should return prefix as message when no msgs provided', () => {
			const prefix = 'my-prefix'
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.ERROR, prefix })

			expect(result).toEqual([{ level: LogLevel.ERROR, message: prefix, meta: undefined, prefix, timestamp: mockTimestamp }])
		})

		it('should return empty message when no msgs and no prefix', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.INFO })

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: '', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should format string message', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.ERROR }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.ERROR, message: 'test', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should format string message with prefix', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.WARN, prefix: 'Prefix' }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.WARN, message: 'Prefix test', meta: undefined, prefix: 'Prefix', timestamp: mockTimestamp },
			])
		})

		it('should format object message as JSON string', () => {
			const obj = { key: 'value' }
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.INFO }, obj)

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: '{"key":"value"}', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should include meta in formatted log', () => {
			const meta = { service: 'test' }
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.DEBUG, meta }, 'test')

			expect(result).toEqual([{ level: LogLevel.DEBUG, message: 'test', meta, prefix: undefined, timestamp: mockTimestamp }])
		})

		it('should format multiple messages into separate FormattedLog entries', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.ERROR }, 'msg1', 'msg2')

			expect(result).toHaveLength(2)
			expect(result[0]).toEqual({
				level: LogLevel.ERROR,
				message: 'msg1',
				meta: undefined,
				prefix: undefined,
				timestamp: mockTimestamp,
			})
			expect(result[1]).toEqual({
				level: LogLevel.ERROR,
				message: 'msg2',
				meta: undefined,
				prefix: undefined,
				timestamp: mockTimestamp,
			})
		})

		it('should format multiple messages with prefix', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.WARN, prefix: 'P' }, 'msg1', 'msg2')

			expect(result[0]?.message).toEqual('P msg1')
			expect(result[1]?.message).toEqual('P msg2')
		})
	})
})
