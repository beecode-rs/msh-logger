import { TimeUtil } from '@beecode/msh-util/time-util'

import { type FormattedLog, type FormattingStrategy } from '#src/formatting-strategy.js'
import { type LogLevel } from '#src/log-level.js'
import { type ObjectType } from '#src/logger-strategy.js'

const timeUtil = new TimeUtil()

export class FormattingStrategyJson implements FormattingStrategy {
	format(
		params: { level: LogLevel; meta?: ObjectType; timestamp?: number; category?: string },
		...msgs: unknown[]
	): FormattedLog[] {
		const { level, meta, category, timestamp = timeUtil.dateToUnix(timeUtil.now()) } = params
		const formatMetadata: ObjectType = { ...meta, timestamp }

		if (category) {
			formatMetadata.category = category
		}

		if (msgs.length === 0) {
			return [{ level, message: '', metadata: formatMetadata }]
		}

		return msgs.map((msg) => {
			const { message, ...extra } = this._extractPayload(msg)

			return { level, message, metadata: { ...formatMetadata, ...extra } }
		})
	}

	protected _extractPayload(msg: unknown): { message: string; [key: string]: unknown } {
		if (!msg) {
			return { message: '' }
		}

		if (typeof msg === 'object') {
			const { message, ...rest } = msg as { message?: string; [key: string]: unknown }

			if (message) {
				return { ...rest, message }
			}

			return { message: JSON.stringify(msg) }
		}

		if (typeof msg === 'string') {
			return { message: msg }
		}

		// eslint-disable-next-line @typescript-eslint/no-base-to-string -- msg is a primitive at this point (string/object cases handled above)
		return { message: String(msg) }
	}
}
