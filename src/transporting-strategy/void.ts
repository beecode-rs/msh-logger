import { type FormattedLog } from '#src/formatting-strategy.js'
import { type TransportingStrategy } from '#src/transporting-strategy.js'

export class TransportingStrategyVoid implements TransportingStrategy {
	transport(_log: FormattedLog): void {} // eslint-disable-line no-empty-function,@typescript-eslint/no-empty-function
}
