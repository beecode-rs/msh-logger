import { ConsoleLogStrategy } from './console-log-strategy/console-log-strategy';
import { LogLevelType } from './log-level-type';
import { LoggerStrategy, StringOrObjectType } from './logger-strategy';
export declare class ConsoleLogger implements LoggerStrategy {
    protected readonly _logLevel: LogLevelType;
    protected readonly _consoleLogStrategy: ConsoleLogStrategy;
    constructor(params?: {
        logLevel?: LogLevelType;
        consoleLogStrategy?: ConsoleLogStrategy;
    });
    static LogLevelToInt(logLevel: LogLevelType): number;
    protected _shouldLog(currentLevel: LogLevelType): boolean;
    protected _logMessage(type: LogLevelType, messageObject: StringOrObjectType, meta?: StringOrObjectType): void;
    debug(messageObject: StringOrObjectType, meta?: StringOrObjectType): void;
    info(messageObject: StringOrObjectType, meta?: StringOrObjectType): void;
    warn(messageObject: StringOrObjectType, meta?: StringOrObjectType): void;
    error(messageObject: StringOrObjectType, meta?: StringOrObjectType): void;
}
//# sourceMappingURL=console-logger.d.ts.map