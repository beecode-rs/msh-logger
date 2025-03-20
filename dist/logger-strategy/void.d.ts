import { type LoggerStrategy, type LoggerStrategyParams } from '#src/logger-strategy';
export declare class LoggerStrategyVoid implements LoggerStrategy {
    debug(..._msgs: unknown[]): void;
    error(..._msgs: unknown[]): void;
    info(..._msgs: unknown[]): void;
    warn(..._msgs: unknown[]): void;
    clone(_?: LoggerStrategyParams): LoggerStrategyVoid;
}
//# sourceMappingURL=void.d.ts.map