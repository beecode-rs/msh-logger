import { TimeUtil } from '@beecode/msh-util/time-util'
import { typeUtil } from '@beecode/msh-util/type-util'

import { LogLevel } from '#src/business/model/log-level.js'
import { type FormattingStrategy } from '#src/business/service/formatting-strategy.js'
import { type LoggerStrategy, type LoggerStrategyParams, type ObjectType } from '#src/business/service/logger-strategy.js'
import { type TransportingStrategy } from '#src/business/service/transporting-strategy.js'
import { objectUtil } from '#src/util/object-util.js'

export type LoggerStrategyBaseParams = {
	formattingStrategy: FormattingStrategy
	transportingStrategy: TransportingStrategy
} & LoggerStrategyParams

const timeUtil = new TimeUtil()

export class LoggerStrategyBase implements LoggerStrategy {
	protected readonly _logLevel: LogLevel
	protected readonly _formattingStrategy: FormattingStrategy
	protected readonly _transportingStrategy: TransportingStrategy
	protected readonly _category?: string
	protected readonly _meta?: ObjectType

	constructor(params: LoggerStrategyBaseParams) {
		const { logLevel = LogLevel.ERROR, formattingStrategy, transportingStrategy, category, meta } = params
		this._logLevel = logLevel
		this._formattingStrategy = formattingStrategy
		this._transportingStrategy = transportingStrategy
		this._category = category
		this._meta = meta
	}

	clone(params?: LoggerStrategyParams): LoggerStrategyBase {
		const { meta, category, logLevel } = params ?? {}

		return new LoggerStrategyBase({
			category: category ?? this._category,
			formattingStrategy: this._formattingStrategy,
			logLevel: logLevel ?? this._logLevel,
			meta: objectUtil.merge(this._meta, meta),
			transportingStrategy: this._transportingStrategy,
		})
	}

	static LogLevelToInt(logLevel: LogLevel): number {
		switch (logLevel) {
			case LogLevel.FATAL:
				return 60
			case LogLevel.ERROR:
				return 50
			case LogLevel.WARN:
				return 40
			case LogLevel.INFO:
				return 30
			case LogLevel.DEBUG:
				return 20
			case LogLevel.TRACE:
				return 10
			default:
				throw typeUtil.exhaustiveError(`Unknown log lever [${String(logLevel)}]`, logLevel)
		}
	}

	protected _shouldLog(currentLevel: LogLevel): boolean {
		return LoggerStrategyBase.LogLevelToInt(currentLevel) >= LoggerStrategyBase.LogLevelToInt(this._logLevel)
	}

	protected _logMessage(type: LogLevel, ...msgs: unknown[]): void {
		if (!this._shouldLog(type)) {
			return
		}

		const timestamp = timeUtil.dateToUnix(timeUtil.now())
		const formatted = this._formattingStrategy.format(
			{ category: this._category, level: type, meta: this._meta, timestamp },
			...msgs
		)
		formatted.forEach((log) => {
			this._transportingStrategy.transport(log)
		})
	}

	fatal(...msgs: unknown[]): void {
		this._logMessage(LogLevel.FATAL, ...msgs)
	}

	error(...msgs: unknown[]): void {
		this._logMessage(LogLevel.ERROR, ...msgs)
	}

	warn(...msgs: unknown[]): void {
		this._logMessage(LogLevel.WARN, ...msgs)
	}

	info(...msgs: unknown[]): void {
		this._logMessage(LogLevel.INFO, ...msgs)
	}

	debug(...msgs: unknown[]): void {
		this._logMessage(LogLevel.DEBUG, ...msgs)
	}

	trace(...msgs: unknown[]): void {
		this._logMessage(LogLevel.TRACE, ...msgs)
	}
}
