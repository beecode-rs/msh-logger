import { type FormattedLog, type FormattingStrategy } from '#src/formatting-strategy.js'
import { type LogLevel } from '#src/log-level.js'
import { type ObjectType } from '#src/logger-strategy.js'

export class FormattingStrategyPino implements FormattingStrategy {
	format(params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): FormattedLog[] {
		const { level, meta, prefix, datetime = new Date() } = params

		return msgs.map((msg) => ({
			level,
			message: this._formatMessage(msg, prefix),
			meta,
			prefix,
			timestamp: datetime.getTime(),
		}))
	}

	protected _formatMessage(msg: unknown, prefix?: string): string {
		if (!msg) {
			return prefix ?? ''
		}

		if (typeof msg === 'object') {
			const { message } = msg as { message?: string }

			return this._joinDefined(prefix, message ?? JSON.stringify(msg))
		}

		if (typeof msg === 'string') {
			return this._joinDefined(prefix, msg)
		}

		// eslint-disable-next-line @typescript-eslint/no-base-to-string -- msg is a primitive at this point (string/object cases handled above)
		return this._joinDefined(prefix, String(msg))
	}

	protected _joinDefined(prefix?: string, msg?: string): string {
		return [prefix, msg].filter(Boolean).join(' ')
	}
}
