import { vi } from 'vitest'

import { type TransportingStrategy } from '#src/transporting-strategy.js'

export class TransportingStrategyMock implements TransportingStrategy {
	transport = vi.fn()
}
