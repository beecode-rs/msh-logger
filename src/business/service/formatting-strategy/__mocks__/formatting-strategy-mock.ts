import { vi } from 'vitest'

import { LogLevel } from '#src/business/model/log-level.js'
import { type FormattedLog, type FormattingStrategy } from '#src/business/service/formatting-strategy.js'

const defaultFormattedLog: FormattedLog = { level: LogLevel.DEBUG, message: 'mock', metadata: undefined }

export class FormattingStrategyMock implements FormattingStrategy {
	format = vi.fn().mockReturnValue([defaultFormattedLog])
}
