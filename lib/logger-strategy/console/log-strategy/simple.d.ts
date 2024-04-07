import { LogLevel } from '../../../log-level';
import { ObjectType } from '../../../logger-strategy';
import { ConsoleLogStrategy } from '../../../logger-strategy/console/log-strategy';
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