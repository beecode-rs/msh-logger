import { type FormattedLog, type FormattingStrategy } from '#src/formatting-strategy.js'
import { type LogLevel } from '#src/log-level.js'
import { type ObjectType } from '#src/logger-strategy.js'

export class FormattingStrategySimpleString implements FormattingStrategy {
	format(params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): FormattedLog[] {
		const { level, meta, prefix, datetime = new Date() } = params

		if (msgs.length === 0) {
			return [{ level, message: prefix ?? '', meta, prefix, timestamp: datetime.getTime() }]
		}

		return msgs.map((msg) => ({
			level,
			message: this._formatMsg(msg, prefix),
			meta,
			prefix,
			timestamp: datetime.getTime(),
		}))
	}

	protected _formatMsg(msg: unknown, prefix?: string): string {
		const parts = [prefix]

		if (typeof msg === 'string') {
			parts.push(msg)
		} else if (msg != null) {
			parts.push(JSON.stringify(msg))
		}

		return parts.filter(Boolean).join(' ')
	}
}
