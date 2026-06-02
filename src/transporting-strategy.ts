import { type FormattedLog } from '#src/formatting-strategy.js'

export interface TransportingStrategy {
	transport(log: FormattedLog): void
}
