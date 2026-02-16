import { LogLevel } from '#src/log-level.js';
import { type ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy.js';
import { type ObjectType } from '#src/logger-strategy.js';
export declare class ConsoleLogStrategySimple implements ConsoleLogStrategy {
    log(params: {
        type: LogLevel;
        meta?: ObjectType;
        datetime?: Date;
        prefix?: string;
    }, ...msgs: unknown[]): void;
    static LogTypeToFunctionName(type: LogLevel): 'log' | 'info' | 'warn' | 'error';
}
//# sourceMappingURL=simple.d.ts.map