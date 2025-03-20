import { type LogLevel } from '../../log-level.js';
import { type ObjectType } from '../../logger-strategy.js';
export interface ConsoleLogStrategy {
    log(params: {
        type: LogLevel;
        meta?: ObjectType;
        datetime?: Date;
        prefix?: string;
    }, ...msgs: unknown[]): void;
}
//# sourceMappingURL=log-strategy.d.ts.map