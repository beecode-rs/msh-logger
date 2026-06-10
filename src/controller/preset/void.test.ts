import { type Mock, afterAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { PresetVoid } from '#src/controller/preset/void.js'

describe('PresetVoid', () => {
	describe('should not call logger', () => {
		let spy_console_log: Mock
		const dummyMessage = 'dummyMessage'
		const dummyObject = { dummy: 'object' }

		const logger = new PresetVoid()

		beforeEach(() => {
			spy_console_log = vi.spyOn(console, 'log').mockImplementation(vi.fn)
		})

		afterAll(() => {
			vi.restoreAllMocks()
		})

		it('should not log on error', () => {
			logger.error(dummyMessage, dummyObject)
			expect(spy_console_log).not.toHaveBeenCalled()
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
			const toClone = new PresetVoid()
			const clonedLogger = toClone.clone()
			expect(clonedLogger).not.toBe(toClone)
		})
	})
})
