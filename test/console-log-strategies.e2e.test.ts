import { LogLevel } from '@beecode/msh-logger/log-level'
import { PresetConsoleSimpleString } from '@beecode/msh-logger/preset/console-simple-string'
import { beforeAll, describe, expect, it, vi } from 'vitest'

describe('Package exports smoke test', () => {
	let consoleErrorSpy: ReturnType<typeof vi.spyOn>

	beforeAll(() => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
	})

	it('should import and use PresetConsoleSimpleString', () => {
		const logger = new PresetConsoleSimpleString({
			logLevel: LogLevel.ERROR,
		})

		logger.error('Smoke test error')

		expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
		expect(consoleErrorSpy.mock.calls[0][0]).toContain('Smoke test error')
	})
})
