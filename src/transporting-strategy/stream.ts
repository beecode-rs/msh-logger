import { type FormattedLog } from '#src/formatting-strategy.js'
import { type TransportingStrategy } from '#src/transporting-strategy.js'

export class TransportingStrategyStream implements TransportingStrategy {
	constructor(protected _stream: NodeJS.WritableStream) {}

	transport(log: FormattedLog): void {
		this._stream.write(`${JSON.stringify(log)}\n`)
	}
}
