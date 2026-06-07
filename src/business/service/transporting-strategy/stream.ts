import { type FormattedLog } from '#src/business/service/formatting-strategy.js'
import { type TransportingStrategy } from '#src/business/service/transporting-strategy.js'

export class TransportingStrategyStream implements TransportingStrategy {
	constructor(protected _stream: NodeJS.WritableStream) {}

	transport(log: FormattedLog): void {
		this._stream.write(`${JSON.stringify(log)}\n`)
	}
}
