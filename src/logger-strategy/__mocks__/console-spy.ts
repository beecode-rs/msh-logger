import { vi } from 'vitest'

import { LogLevel } from '#src'
import { LoggerStrategyConsole } from '#src/logger-strategy/console'

export class LoggerStrategyConsoleSpy extends LoggerStrategyConsole {
	spy_shouldLog = vi.fn<[LogLevel], boolean>().mockImplementation(super._shouldLog)
	protected _shouldLog(currentLevel: LogLevel): boolean {
		return this.spy_shouldLog(currentLevel)
	}

	spy_logMessage = vi.fn<[LogLevel, ...unknown[]]>().mockImplementation(super._logMessage)
	protected _logMessage(type: LogLevel, ...msgs: unknown[]): void {
		this.spy_logMessage(type, ...msgs)
	}
}
