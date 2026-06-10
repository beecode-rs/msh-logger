import { vi } from 'vitest'

import { type TransportingStrategy } from '#src/business/service/transporting-strategy.js'

export class TransportingStrategyMock implements TransportingStrategy {
	transport = vi.fn()
}
