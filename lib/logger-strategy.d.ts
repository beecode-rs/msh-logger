import { type LogLevel } from './log-level.js';
export type ObjectType = Record<string, unknown>;
export type LoggerStrategyParams = {
    logLevel?: LogLevel;
    messagePrefix?: string;
    meta?: ObjectType;
};
export interface LoggerStrategy {
    debug(...msgs: unknown[]): void;
    info(...msgs: unknown[]): void;
    warn(...msgs: unknown[]): void;
    error(...msgs: unknown[]): void;
    clone(overrideParams?: LoggerStrategyParams): LoggerStrategy;
}
//# sourceMappingURL=logger-strategy.d.ts.map