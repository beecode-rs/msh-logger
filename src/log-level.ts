export enum LogLevel {
	/** Unrecoverable error — the process must terminate (e.g., out of memory, corrupt state). */
	FATAL = 'FATAL',
	/** Unexpected failure — a feature failed but the process can continue. */
	ERROR = 'ERROR',
	/** Degraded behavior — something unexpected but recoverable (e.g., deprecated API usage, retries). */
	WARN = 'WARN',
	/** Business-significant events — service started, user logged in, order placed. */
	INFO = 'INFO',
	/** Diagnostic detail — request/response payloads, branching decisions. */
	DEBUG = 'DEBUG',
	/** Fine-grained flow — function entry/exit, variable dumps, tight-loop internals. */
	TRACE = 'TRACE',
}
