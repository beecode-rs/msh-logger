import { type LoggerStrategy, type LoggerStrategyParams } from '#src/logger-strategy.js'

export class PresetVoid implements LoggerStrategy {
	fatal(..._msgs: unknown[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function
	error(..._msgs: unknown[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function
	warn(..._msgs: unknown[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function
	info(..._msgs: unknown[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function
	debug(..._msgs: unknown[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function
	trace(..._msgs: unknown[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

	clone(_?: LoggerStrategyParams): PresetVoid {
		// eslint-disable-line @typescript-eslint/no-empty-function
		return new PresetVoid()
	}
}
