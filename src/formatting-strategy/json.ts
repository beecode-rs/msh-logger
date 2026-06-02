import { type FormattedLog, type FormattingStrategy } from '#src/formatting-strategy.js'
import { type LogLevel } from '#src/log-level.js'
import { type ObjectType } from '#src/logger-strategy.js'

export class FormattingStrategyJson implements FormattingStrategy {
	format(params: { level: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): FormattedLog[] {
		const { level, meta, prefix, datetime = new Date() } = params

		return msgs.map((msg) => {
			const { message, ...extra } = this._extractPayload(msg, prefix)

			return { extra, level, message, meta, prefix, timestamp: datetime.getTime() }
		})
	}

	protected _extractPayload(msg: unknown, prefix?: string): { message: string; [key: string]: unknown } {
		if (!msg) {
			return { message: '' }
		}

		if (typeof msg === 'object') {
			const { message, ...rest } = msg as { message?: string; [key: string]: unknown }

			return { ...rest, message: this._joinDefined(prefix, message) }
		}

		if (typeof msg === 'string') {
			return { message: this._joinDefined(prefix, msg) }
		}

		return { message: '' }
	}

	protected _joinDefined(prefix?: string, msg?: string): string {
		return [prefix, msg].filter(Boolean).join(' ')
	}
}
