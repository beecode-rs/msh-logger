import { describe, expect, it } from 'vitest'

import { FormattingStrategyPino } from '#src/formatting-strategy/pino.js'
import { LogLevel } from '#src/log-level.js'

describe('FormattingStrategyPino', () => {
	const formatter = new FormattingStrategyPino()
	const mockDateTime = new Date()
	const mockTimestamp = mockDateTime.getTime()

	describe('format', () => {
		it('should format string message', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.DEBUG }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.DEBUG, message: 'test', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should format string message with prefix', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.WARN, prefix: 'Prefix' }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.WARN, message: 'Prefix test', meta: undefined, prefix: 'Prefix', timestamp: mockTimestamp },
			])
		})

		it('should format object with message property', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.INFO }, { message: 'test message' })

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: 'test message', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should format object without message property as JSON string', () => {
			const obj = { key: 'value' }
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.INFO }, obj)

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: '{"key":"value"}', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should format object without message property with prefix', () => {
			const obj = { key: 'value' }
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.INFO, prefix: 'Prefix' }, obj)

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: 'Prefix {"key":"value"}', meta: undefined, prefix: 'Prefix', timestamp: mockTimestamp },
			])
		})

		it('should include meta in formatted log', () => {
			const meta = { requestId: 'abc' }
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.DEBUG, meta }, 'test')

			expect(result).toEqual([{ level: LogLevel.DEBUG, message: 'test', meta, prefix: undefined, timestamp: mockTimestamp }])
		})

		it('should handle empty message with prefix', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.DEBUG, prefix: 'Prefix' }, '')

			expect(result).toEqual([
				{ level: LogLevel.DEBUG, message: 'Prefix', meta: undefined, prefix: 'Prefix', timestamp: mockTimestamp },
			])
		})

		it('should handle empty message without prefix', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.DEBUG }, '')

			expect(result).toEqual([
				{ level: LogLevel.DEBUG, message: '', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should handle number message', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.INFO }, 42)

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: '42', meta: undefined, prefix: undefined, timestamp: mockTimestamp },
			])
		})

		it('should format multiple messages into separate entries', () => {
			const result = formatter.format({ datetime: mockDateTime, level: LogLevel.DEBUG }, 'msg1', 'msg2')

			expect(result).toHaveLength(2)
			expect(result[0]?.message).toEqual('msg1')
			expect(result[1]?.message).toEqual('msg2')
		})
	})
})
