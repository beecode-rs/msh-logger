import { describe, expect, it, vi } from 'vitest'

import { type FormattedLog } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/log-level.js'
import { TransportingStrategyStream } from '#src/transporting-strategy/stream.js'

describe('TransportingStrategyStream', () => {
	describe('transport', () => {
		it('should write JSON stringified log with newline to stream', () => {
			const mockWrite = vi.fn()
			const mockStream = { write: mockWrite } as unknown as NodeJS.WritableStream
			const transporter = new TransportingStrategyStream(mockStream)

			const log: FormattedLog = { level: LogLevel.INFO, message: 'test' }
			transporter.transport(log)

			expect(mockWrite).toHaveBeenCalledTimes(1)
			expect(mockWrite).toHaveBeenCalledWith(`${JSON.stringify(log)}\n`)
		})

		it('should write log with all fields', () => {
			const mockWrite = vi.fn()
			const mockStream = { write: mockWrite } as unknown as NodeJS.WritableStream
			const transporter = new TransportingStrategyStream(mockStream)

			const log: FormattedLog = {
				level: LogLevel.ERROR,
				message: '2025-01-01T00:00:00.000Z - ERROR: something failed',
				metadata: { service: 'api' },
			}
			transporter.transport(log)

			expect(mockWrite).toHaveBeenCalledWith(`${JSON.stringify(log)}\n`)
		})
	})
})
