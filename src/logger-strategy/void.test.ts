import { afterAll, afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

jest.unstable_mockModule('#src/logger-strategy/void', async () => {
	const { LoggerStrategy } = await import('#src/logger-strategy/__mocks__/logger-strategy-mock')

	return {
		LoggerStrategyVoid: LoggerStrategy,
	}
})

const { LoggerStrategyVoid: LoggerStrategyVoidMock } = await import('#src/logger-strategy/void')

describe('LoggerStrategyVoid', () => {
	describe('should not call logger', () => {
		let spy_console_log: jest.SpiedFunction<(message?: never, ...optionalParams: never[]) => void>
		const dummyMessage = 'dummyMessage'
		const dummyObject = { dummy: 'object' }

		const logger = new LoggerStrategyVoidMock()

		beforeEach(() => {
			spy_console_log = jest.spyOn(console, 'log').mockImplementation(jest.fn)
		})

		afterEach(() => {
			jest.resetAllMocks()
		})
		afterAll(() => {
			jest.restoreAllMocks()
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
