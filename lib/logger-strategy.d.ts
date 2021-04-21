export declare type ObjectType = {
    [key: string]: any;
};
export declare type StringOrObjectType = string | ObjectType;
export interface LoggerStrategy {
    debug(messageObject: StringOrObjectType, meta?: ObjectType): void;
    info(messageObject: StringOrObjectType, meta?: ObjectType): void;
    warn(messageObject: StringOrObjectType, meta?: ObjectType): void;
    error(messageObject: StringOrObjectType, meta?: ObjectType): void;
}
//# sourceMappingURL=logger-strategy.d.ts.map