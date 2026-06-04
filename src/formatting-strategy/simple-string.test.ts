import { describe, expect, it } from 'vitest'

import { FormattingStrategySimpleString } from '#src/formatting-strategy/simple-string.js'
import { LogLevel } from '#src/log-level.js'

describe('FormattingStrategySimpleString', () => {
	const formatter = new FormattingStrategySimpleString()
	const mockTimestamp = 1234567890000
	const mockTimestampIso = '2009-02-13T23:31:30.000Z'

	describe('format', () => {
		it('should return timestamp and level with category when no msgs provided', () => {
			const category = 'my-category'
			const result = formatter.format({ category, level: LogLevel.ERROR, timestamp: mockTimestamp })

			expect(result).toEqual([
				{ level: LogLevel.ERROR, message: `${mockTimestampIso} - ERROR: [my-category]`, metadata: undefined },
			])
		})

		it('should return timestamp and level with empty message when no msgs and no category', () => {
			const result = formatter.format({ level: LogLevel.INFO, timestamp: mockTimestamp })

			expect(result).toEqual([{ level: LogLevel.INFO, message: `${mockTimestampIso} - INFO: `, metadata: undefined }])
		})

		it('should format string message with timestamp and level', () => {
			const result = formatter.format({ level: LogLevel.ERROR, timestamp: mockTimestamp }, 'test')

			expect(result).toEqual([{ level: LogLevel.ERROR, message: `${mockTimestampIso} - ERROR: test`, metadata: undefined }])
		})

		it('should format string message with category, timestamp and level', () => {
			const result = formatter.format({ category: 'Prefix', level: LogLevel.WARN, timestamp: mockTimestamp }, 'test')

			expect(result).toEqual([
				{ level: LogLevel.WARN, message: `${mockTimestampIso} - WARN: [Prefix] test`, metadata: undefined },
			])
		})

		it('should format object message as JSON string with timestamp and level', () => {
			const obj = { key: 'value' }
			const result = formatter.format({ level: LogLevel.INFO, timestamp: mockTimestamp }, obj)

			expect(result).toEqual([
				{ level: LogLevel.INFO, message: `${mockTimestampIso} - INFO: {"key":"value"}`, metadata: undefined },
			])
		})

		it('should include metadata in formatted log', () => {
			const metadata = { service: 'test' }
			const result = formatter.format({ level: LogLevel.DEBUG, metadata, timestamp: mockTimestamp }, 'test')

			expect(result).toEqual([{ level: LogLevel.DEBUG, message: `${mockTimestampIso} - DEBUG: test`, metadata }])
		})

		it('should format multiple messages into separate FormattedLog entries', () => {
			const result = formatter.format({ level: LogLevel.ERROR, timestamp: mockTimestamp }, 'msg1', 'msg2')

			expect(result).toHaveLength(2)
			expect(result[0]).toEqual({
				level: LogLevel.ERROR,
				message: `${mockTimestampIso} - ERROR: msg1`,
				metadata: undefined,
			})
			expect(result[1]).toEqual({
				level: LogLevel.ERROR,
				message: `${mockTimestampIso} - ERROR: msg2`,
				metadata: undefined,
			})
		})

		it('should format multiple messages with category', () => {
			const result = formatter.format({ category: 'P', level: LogLevel.WARN, timestamp: mockTimestamp }, 'msg1', 'msg2')

			expect(result[0]?.message).toEqual(`${mockTimestampIso} - WARN: [P] msg1`)
			expect(result[1]?.message).toEqual(`${mockTimestampIso} - WARN: [P] msg2`)
		})
	})
})
