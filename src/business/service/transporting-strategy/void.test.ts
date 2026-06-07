import { afterAll, describe, expect, it, vi } from 'vitest'

import { LogLevel } from '#src/business/model/log-level.js'
import { type FormattedLog } from '#src/business/service/formatting-strategy.js'
import { TransportingStrategyVoid } from '#src/business/service/transporting-strategy/void.js'

describe('TransportingStrategyVoid', () => {
	const spy_console_log = vi.spyOn(console, 'log').mockImplementation(() => undefined)
	const transporter = new TransportingStrategyVoid()

	afterAll(() => {
		vi.restoreAllMocks()
	})

	describe('transport', () => {
		it('should not output anything', () => {
			const log: FormattedLog = { level: LogLevel.ERROR, message: 'test' }
			transporter.transport(log)
			expect(spy_console_log).not.toHaveBeenCalled()
		})
	})
})
