import { ObjectUtil } from '@beecode/msh-util/object-util'

import { type LogLevel } from '#src/log-level'
import { type ObjectType } from '#src/logger-strategy'
import { type ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy'

export class ConsoleLogStrategyNewRelicJson implements ConsoleLogStrategy {
	protected _objectUtil = new ObjectUtil()

	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: unknown[]): void {
		const { type, meta, prefix, datetime = new Date() } = params

		const messagePayloads = msgs.map((msg) => {
			return {
				...meta,
				logtype: type.toString(),
				timestamp: datetime.getTime(),
				...this._messagePayloadExtractorIfExists({ msg, prefix }),
			}
		})
		messagePayloads.forEach((payload) => {
			console.log(this._objectUtil.deepStringify(payload, { isSorted: true })) // eslint-disable-line no-console
		})
	}

	protected _messagePayloadExtractorIfExists(params: { msg: unknown; prefix?: string }): {
		message: string
		[key: string]: unknown
	} {
		const { msg, prefix } = params
		if (!msg) {
			return { message: '' }
		}

		if (typeof msg === 'object') {
			const { message, ...restObjects } = msg as { message?: string; [key: string]: unknown }

			return { ...restObjects, message: this._joinDefined(prefix, message) }
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
