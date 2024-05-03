import { Mock, afterAll, afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('#src/logger-strategy/void', async () => {
	const { LoggerStrategy } = await import('#src/logger-strategy/__mocks__/logger-strategy-mock')

	return {
		LoggerStrategyVoid: LoggerStrategy,
	}
})

const { LoggerStrategyVoid: LoggerStrategyVoidMock } = await import('#src/logger-strategy/void')

describe('LoggerStrategyVoid', () => {
	describe('should not call logger', () => {
		let spy_console_log: Mock
		const dummyMessage = 'dummyMessage'
		const dummyObject = { dummy: 'object' }

		const logger = new LoggerStrategyVoidMock()

		beforeEach(() => {
			spy_console_log = vi.spyOn(console, 'log').mockImplementation(vi.fn)
		})

		afterAll(() => {
			vi.restoreAllMocks()
		})

		it('should not log on error', () => {
			logger.error(dummyMessage, dummyObject)
			expect(spy_console_log).not.toHaveBeenCalled()
			expect(logger.error).toHaveBeenCalledTimes(1)
		})

		it('should not log on warn', () => {
			logger.warn(dummyMessage, dummyObject)
			expect(spy_console_log).not.toHaveBeenCalled()
		})

		it('should not log on info', () => {
			logger.info(dummyMessage, dummyObject)
			expect(spy_console_log).not.toHaveBeenCalled()
		})

		it('should not log on debug', () => {
			logger.debug(dummyMessage, dummyObject)
			expect(spy_console_log).not.toHaveBeenCalled()
		})
	})

	describe('clone', () => {
		it('should just clone logger', () => {
			const toClone = new LoggerStrategyVoidMock()
			const clonedLogger = toClone.clone()
			expect(clonedLogger).not.toBe(toClone)
		})
	})
})
