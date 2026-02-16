import { type Logger } from 'pino';
import { LogLevel } from '#src/log-level.js';
import { type ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy.js';
import { type ObjectType } from '#src/logger-strategy.js';
export declare class ConsoleLogStrategyPino implements ConsoleLogStrategy {
    protected _logger: Logger;
    constructor();
    log(params: {
        type: LogLevel;
        meta?: ObjectType;
        datetime?: Date;
        prefix?: string;
    }, ...msgs: unknown[]): void;
    protected _formatMessage(msg: unknown, prefix?: string): string;
    protected _joinDefined(prefix?: string, msg?: string): string;
    static LogLevelToFunctionName(type: LogLevel): 'error' | 'warn' | 'info' | 'debug';
}
//# sourceMappingURL=pino.d.ts.map