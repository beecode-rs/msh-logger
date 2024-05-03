import { LogLevel } from '#src/log-level';
import { LoggerStrategy, LoggerStrategyParams, ObjectType } from '#src/logger-strategy';
import { ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy';
export type ConsoleLoggerParams = {
    consoleLogStrategy?: ConsoleLogStrategy;
} & LoggerStrategyParams;
export declare class LoggerStrategyConsole implements LoggerStrategy {
    protected readonly _logLevel: LogLevel;
    protected readonly _consoleLogStrategy: ConsoleLogStrategy;
    protected readonly _messagePrefix?: string;
    protected readonly _meta?: ObjectType;
    constructor(params?: ConsoleLoggerParams);
    clone(params?: LoggerStrategyParams): LoggerStrategyConsole;
    static LogLevelToInt(logLevel: LogLevel): number;
    protected _shouldLog(currentLevel: LogLevel): boolean;
    protected _logMessage(type: LogLevel, ...msgs: unknown[]): void;
    debug(...msgs: unknown[]): void;
    info(...msgs: unknown[]): void;
    warn(...msgs: unknown[]): void;
    error(...msgs: unknown[]): void;
}
//# sourceMappingURL=console.d.ts.map