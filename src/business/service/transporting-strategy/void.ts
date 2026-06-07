import { type FormattedLog } from '#src/business/service/formatting-strategy.js'
import { type TransportingStrategy } from '#src/business/service/transporting-strategy.js'

export class TransportingStrategyVoid implements TransportingStrategy {
	transport(_log: FormattedLog): void {} // eslint-disable-line no-empty-function,@typescript-eslint/no-empty-function
}
