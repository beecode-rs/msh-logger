import { type FormattedLog } from '#src/business/service/formatting-strategy.js'

export interface TransportingStrategy {
	transport(log: FormattedLog): void
}
