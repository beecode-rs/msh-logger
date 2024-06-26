import { ObjectUtil } from '@beecode/msh-util/object-util';
import { LogLevel } from '../../../log-level.js';
import { ObjectType } from '../../../logger-strategy.js';
import { ConsoleLogStrategy } from '../../../logger-strategy/console/log-strategy.js';
export declare class ConsoleLogStrategyNewRelicJson implements ConsoleLogStrategy {
    protected _objectUtil: ObjectUtil;
    log(params: {
        type: LogLevel;
        meta?: ObjectType;
        datetime?: Date;
        prefix?: string;
    }, ...msgs: unknown[]): void;
    protected _messagePayloadExtractorIfExists(params: {
        msg: unknown;
        prefix?: string;
    }): {
        message: string;
        [key: string]: unknown;
    };
    protected _joinDefined(prefix?: string, msg?: string): string;
}
//# sourceMappingURL=new-relic-json.d.ts.map