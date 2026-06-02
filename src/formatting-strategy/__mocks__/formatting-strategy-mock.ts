import { vi } from 'vitest'

import { type FormattedLog, type FormattingStrategy } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/src/log-level.js'

const defaultFormattedLog: FormattedLog = { level: LogLevel.DEBUG, message: 'mock', timestamp: 0 }

export class FormattingStrategyMock implements FormattingStrategy {
	format = vi.fn().mockReturnValue([defaultFormattedLog])
}
