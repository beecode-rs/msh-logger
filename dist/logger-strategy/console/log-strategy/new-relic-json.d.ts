import { ObjectUtil } from '@beecode/msh-util/object-util';
import { type LogLevel } from '#src/log-level';
import { type ObjectType } from '#src/logger-strategy';
import { type ConsoleLogStrategy } from '#src/logger-strategy/console/log-strategy';
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