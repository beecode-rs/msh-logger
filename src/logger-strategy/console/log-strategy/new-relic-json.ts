import { ObjectUtil } from '@beecode/msh-util/object-util.js'

import { LogLevel } from '#/log-level.js'
import { ConsoleLogStrategy } from '#/logger-strategy/console/log-strategy/index.js'
import { ObjectType, StringOrObjectType } from '#/logger-strategy/index.js'

export class ConsoleLogStrategyNewRelicJson implements ConsoleLogStrategy {
	protected _objectUtil = new ObjectUtil()

	log(params: { type: LogLevel; meta?: ObjectType; datetime?: Date; prefix?: string }, ...msgs: StringOrObjectType[]): void {
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

	protected _messagePayloadExtractorIfExists(params: { msg: StringOrObjectType; prefix?: string }): { message: string } {
		const { msg, prefix } = params

		if (typeof msg === 'object') {
			return { ...msg, ...((prefix || msg.message) && { message: this._joinDefined(prefix, msg.message) }) }
		}

		return { message: this._joinDefined(prefix, msg) }
	}

	protected _joinDefined(prefix?: string, msg?: string): string {
		return [prefix, msg].filter(Boolean).join(' ')
	}
}
