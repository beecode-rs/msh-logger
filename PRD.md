# PRD: Pino Console Log Strategy

## Introduction

Add a Pino-based console log strategy alongside the existing Simple and NewRelicJson implementations. This provides structured JSON logging using the popular `pino` library, following the established `ConsoleLogStrategy` interface pattern.

## Goals

- Add `pino` as a package dependency
- Implement `ConsoleLogStrategyPino` class following the existing strategy pattern
- Output logs in Pino's native JSON format with basic fields (level, message, timestamp)
- Provide unit tests using Vitest that verify the implementation
- Ensure all tests pass

## User Stories

### US-001: Add pino dependency
**Description:** As a developer, I need pino installed so the new strategy can use it for logging.

**Acceptance Criteria:**
- [x] Add `pino` package as a dependency in package.json
- [x] Add `@types/pino` or use pino's built-in types if available
- [x] Run `npm install` successfully
- [x] Typecheck passes

### US-002: Create ConsoleLogStrategyPino class
**Description:** As a developer, I want a Pino-based log strategy so I can output structured JSON logs using the pino library.

**Acceptance Criteria:**
- [x] Create `src/logger-strategy/console/log-strategy/pino.ts`
- [x] Class `ConsoleLogStrategyPino` implements `ConsoleLogStrategy` interface
- [x] `log()` method maps LogLevel to pino log methods (error, warn, info, debug)
- [x] Logs include message, timestamp, and meta if provided
- [x] Prefix is prepended to message when present
- [x] Follow the same class structure as `simple.ts` and `new-relic-json.ts`
- [x] Typecheck passes

### US-003: Write unit tests for ConsoleLogStrategyPino
**Description:** As a developer, I want unit tests for the Pino strategy to ensure it works correctly.

**Acceptance Criteria:**
- [x] Create `src/logger-strategy/console/log-strategy/pino.test.ts`
- [x] Test logging with string message
- [x] Test logging with object message
- [x] Test logging with meta object
- [x] Test logging with prefix
- [x] Test all log levels (ERROR, WARN, INFO, DEBUG)
- [x] Mock pino to verify correct methods are called
- [x] Follow test patterns from `simple.test.ts` and `new-relic-json.test.ts`
- [x] Tests pass: `npm run test:unit -- src/logger-strategy/console/log-strategy/pino.test.ts`
- [x] Typecheck passes

### US-004: Verify all tests pass and fix if needed
**Description:** As a developer, I want to ensure all tests pass after implementation.

**Acceptance Criteria:**
- [x] Run `npm run test:unit` - all tests pass
- [x] Run `npm run lint` - no lint errors
- [x] Typecheck passes

## Non-Goals

- No Pino pretty-print configuration
- No custom serializers or formatters
- No constructor options beyond the interface requirements
- No integration tests
- No export from main index.ts (follow existing pattern where strategies are imported directly)

## Technical Considerations

- Follow the exact structure of `ConsoleLogStrategySimple` and `ConsoleLogStrategyNewRelicJson`
- Use `#src` path aliases for imports
- Pino uses numeric log levels internally; map from `LogLevel` enum appropriately
- Pino logger instance should be created in the class (not passed in, per 3A choice)
- Mock pino in tests to avoid actual console output and verify method calls
