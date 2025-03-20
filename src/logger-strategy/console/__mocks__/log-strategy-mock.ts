import { vi } from 'vitest'

import { type ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy'

export class ConsoleLogStrategyMock implements ConsoleLogStrategy {
	log = vi.fn()
}
