import { vi } from 'vitest'

import { type LoggerStrategy as LoggerStrategyToMock } from '#src/logger-strategy'

export class LoggerStrategy implements LoggerStrategyToMock {
	clone = vi.fn()

	debug = vi.fn()
	error = vi.fn()
	info = vi.fn()
	warn = vi.fn()
}
