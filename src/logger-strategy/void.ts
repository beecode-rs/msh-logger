import { LoggerStrategy, LoggerStrategyParams } from 'src/logger-strategy'

export class LoggerStrategyVoid implements LoggerStrategy {
	debug(..._msgs: unknown[]): void {} // eslint-disable-line
	error(..._msgs: unknown[]): void {} // eslint-disable-line
	info(..._msgs: unknown[]): void {} // eslint-disable-line
	warn(..._msgs: unknown[]): void {} // eslint-disable-line
	// eslint-disable-next-line
	clone(_?: LoggerStrategyParams): LoggerStrategyVoid {
		return new LoggerStrategyVoid()
	}
}
