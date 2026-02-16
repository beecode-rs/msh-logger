import { vi } from 'vitest'

import { type ConsoleLogStrategy } from '#src/src/logger-strategy/console/log-strategy.js'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = vi.fn()
}
