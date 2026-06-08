import { TimeUtil } from '@beecode/msh-util/time-util'

import { type LogLevel } from '#src/business/model/log-level.js'
import { type FormattedLog, type FormattingStrategy } from '#src/business/service/formatting-strategy.js'
import { type ObjectType } from '#src/business/service/logger-strategy.js'

const timeUtil = new TimeUtil()

export class FormattingStrategySimpleString implements FormattingStrategy {
	format(
		params: { level: LogLevel; metadata?: ObjectType; timestamp?: number; category?: string },
		...msgs: unknown[]
	): FormattedLog[] {
		const { level, metadata, category, timestamp = timeUtil.dateToUnix(timeUtil.now()) } = params

		if (msgs.length === 0) {
			const prefix = this._formatPrefix(category)

			return [{ level, message: this._formatLine(level, timestamp, prefix), metadata }]
		}

		return msgs.map((msg) => ({
			level,
			message: this._formatLine(level, timestamp, this._formatMsg(msg, category)),
			metadata,
		}))
	}

	protected _formatLine(level: LogLevel, timestamp: number, msg: string): string {
		return `${timeUtil.unixToDate(timestamp).toISOString()} - ${level}: ${msg}`
	}

	protected _formatPrefix(category?: string): string {
		if (category) {
			return `[${category}]`
		}

		return ''
	}

	protected _formatMsg(msg: unknown, category?: string): string {
		const parts: string[] = []

		if (category) {
			parts.push(`[${category}]`)
		}

		if (typeof msg === 'string') {
			parts.push(msg)
		} else if (msg != null) {
			parts.push(JSON.stringify(msg))
		}

		return parts.join(' ')
	}
}
