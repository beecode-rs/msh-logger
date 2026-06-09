import { describe, expect, it } from 'vitest'

import { LogLevel } from '#src/business/model/log-level.js'
import { FormattingStrategyJson } from '#src/business/service/formatting-strategy/json.js'

describe('FormattingStrategyJson', () => {
	const formatter = new FormattingStrategyJson()
	const mockTimestamp = 1234567890000

	describe('format', () => {
		it('should format string message with time in metadata', () => {
			const result = formatter.format({ level: LogLevel.ERROR, timestamp: mockTimestamp }, 'test')

			expect(result).toEqual([{ level: LogLevel.ERROR, message: 'test', metadata: { timestamp: mockTimestamp } }])
		})

		it('should format string message with category in metadata only', () => {
			const result = formatter.format({ category: 'Prefix', level: LogLevel.WARN, timestamp: mockTimestamp }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.WARN, message: 'test', metadata: { category: 'Prefix', timestamp: mockTimestamp } },
			])
		})

		it('should format object with message property', () => {
			const result = formatter.format({ level: LogLevel.INFO, timestamp: mockTimestamp }, { message: 'hello' })

			expect(result).toEqual([{ level: LogLevel.INFO, message: 'hello', metadata: { timestamp: mockTimestamp } }])
		})

		it('should format object with message property and category in metadata only', () => {
			const result = formatter.format(
				{ category: 'Prefix', level: LogLevel.DEBUG, timestamp: mockTimestamp },
				{ message: 'hello' }
			)

			expect(result).toEqual([
				{ level: LogLevel.DEBUG, message: 'hello', metadata: { category: 'Prefix', timestamp: mockTimestamp } },
			])
		})

		it('should format object without message property as JSON string', () => {
			const obj = { key: 'value' }
			const result = formatter.format({ level: LogLevel.INFO, timestamp: mockTimestamp }, obj)

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: '{"key":"value"}', metadata: { timestamp: mockTimestamp } },
			])
		})

		it('should format object without message property with category in metadata only', () => {
			const obj = { key: 'value' }
			const result = formatter.format({ category: 'Prefix', level: LogLevel.INFO, timestamp: mockTimestamp }, obj)

			expect(result).toEqual([
				{
					level: LogLevel.INFO,
					message: '{"key":"value"}',
					metadata: { category: 'Prefix', timestamp: mockTimestamp },
				},
			])
		})

		it('should format object with extra properties merged into metadata', () => {
			const obj = { err: 'stack trace', message: 'something failed' }
			const result = formatter.format({ level: LogLevel.ERROR, timestamp: mockTimestamp }, obj)

			expect(result).toEqual([
				{
					level: LogLevel.ERROR,
					message: 'something failed',
					metadata: { err: 'stack trace', timestamp: mockTimestamp },
				},
			])
		})

		it('should include metadata merged with time and extra in formatted log', () => {
			const metadata = { service: 'test' }
			const result = formatter.format({ level: LogLevel.INFO, meta: metadata, timestamp: mockTimestamp }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: 'test', metadata: { service: 'test', timestamp: mockTimestamp } },
			])
		})

		it('should handle empty message with category', () => {
			const result = formatter.format({ category: 'Prefix', level: LogLevel.DEBUG, timestamp: mockTimestamp }, '')

			expect(result).toEqual([
				{ level: LogLevel.DEBUG, message: '', metadata: { category: 'Prefix', timestamp: mockTimestamp } },
			])
		})

		it('should handle empty message without category', () => {
			const result = formatter.format({ level: LogLevel.DEBUG, timestamp: mockTimestamp }, '')

			expect(result).toEqual([{ level: LogLevel.DEBUG, message: '', metadata: { timestamp: mockTimestamp } }])
		})

		it('should handle number message', () => {
			const result = formatter.format({ level: LogLevel.INFO, timestamp: mockTimestamp }, 42)

			expect(result).toEqual([{ level: LogLevel.INFO, message: '42', metadata: { timestamp: mockTimestamp } }])
		})

		it('should handle no messages with category', () => {
			const result = formatter.format({ category: 'my-prefix', level: LogLevel.ERROR, timestamp: mockTimestamp })

			expect(result).toEqual([
				{ level: LogLevel.ERROR, message: '', metadata: { category: 'my-prefix', timestamp: mockTimestamp } },
			])
		})

		it('should handle no messages without category', () => {
			const result = formatter.format({ level: LogLevel.INFO, timestamp: mockTimestamp })

			expect(result).toEqual([{ level: LogLevel.INFO, message: '', metadata: { timestamp: mockTimestamp } }])
		})

		it('should format multiple messages into separate entries', () => {
			const result = formatter.format({ level: LogLevel.DEBUG, timestamp: mockTimestamp }, 'msg1', 'msg2')

			expect(result).toHaveLength(2)
			expect(result[0]).toEqual({ level: LogLevel.DEBUG, message: 'msg1', metadata: { timestamp: mockTimestamp } })
			expect(result[1]).toEqual({ level: LogLevel.DEBUG, message: 'msg2', metadata: { timestamp: mockTimestamp } })
		})
	})
})
