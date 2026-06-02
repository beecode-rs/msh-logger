import { typeUtil } from '@beecode/msh-util/type-util'

import { type FormattingStrategy } from '#src/formatting-strategy.js'
import { LogLevel } from '#src/log-level.js'
import { type LoggerStrategy, type LoggerStrategyParams, type ObjectType } from '#src/logger-strategy.js'
import { type TransportingStrategy } from '#src/transporting-strategy.js'

export type LoggerStrategyBaseParams = {
	formattingStrategy: FormattingStrategy
	transportingStrategy: TransportingStrategy
} & LoggerStrategyParams

export class LoggerStrategyBase implements LoggerStrategy {
	protected readonly _logLevel: LogLevel
	protected readonly _formattingStrategy: FormattingStrategy
	protected readonly _transportingStrategy: TransportingStrategy
	protected readonly _messagePrefix?: string
	protected readonly _meta?: ObjectType

	constructor(params: LoggerStrategyBaseParams) {
		const { logLevel = LogLevel.ERROR, formattingStrategy, transportingStrategy, messagePrefix, meta } = params
		this._logLevel = logLevel
		this._formattingStrategy = formattingStrategy
		this._transportingStrategy = transportingStrategy
		this._messagePrefix = messagePrefix
		this._meta = meta
	}

	clone(params?: LoggerStrategyParams): LoggerStrategyBase {
		const { meta, messagePrefix, logLevel } = params ?? {}

		return new LoggerStrategyBase({
			formattingStrategy: this._formattingStrategy,
			logLevel: logLevel ?? this._logLevel,
			messagePrefix: messagePrefix ?? this._messagePrefix,
			// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
			meta: (this._meta || meta) && { ...this._meta, ...meta },
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
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				throw typeUtil.exhaustiveError(`Unknown log lever [${logLevel}]`, logLevel)
		}
	}

	protected _shouldLog(currentLevel: LogLevel): boolean {
		return LoggerStrategyBase.LogLevelToInt(currentLevel) >= LoggerStrategyBase.LogLevelToInt(this._logLevel)
	}

	protected _logMessage(type: LogLevel, ...msgs: unknown[]): void {
		if (!this._shouldLog(type)) {
			return
		}

		const formatted = this._formattingStrategy.format({ level: type, meta: this._meta, prefix: this._messagePrefix }, ...msgs)
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
