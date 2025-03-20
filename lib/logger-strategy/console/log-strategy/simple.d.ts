import { LogLevel } from '../../../log-level.js';
import { type ObjectType } from '../../../logger-strategy.js';
import { type ConsoleLogStrategy } from '../../../logger-strategy/console/log-strategy.js';
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