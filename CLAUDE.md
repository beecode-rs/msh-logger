# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build
npm run build             # Build ESM to dist/
npm run clean             # Remove dist/

# Test
npm run test              # Run all tests (unit + integration + e2e)
npm run test:unit         # Unit tests only (src/**/*.test.ts)
npm run test:int          # Integration tests only (src/**/__tests__/*.test.ts)
npm run test:e2e          # E2E tests (in test/ directory)

# Run single test file
npx vitest --config=./vitest.config.unit.ts src/logger-strategy/console.test.ts

# Lint
npm run lint              # Run all linters (prettier + eslint + json)
npm run lint-fix          # Auto-fix all lint issues

# Development
npm run watch             # Watch mode for build
npm run tsc-check         # Type check without emitting
```

## Architecture

This is a logging abstraction package using the **Strategy Pattern**.

### Core Components

**LoggerStrategy interface** (`src/logger-strategy.ts`):
- Defines the contract: `debug()`, `info()`, `warn()`, `error()`, `clone()`
- All logging implementations must implement this interface

**Implementations**:
- `LoggerStrategyVoid` - No-op logger (default, ignores all logs)
- `LoggerStrategyConsole` - Outputs to console with configurable log level

**Console Log Strategies** (`src/logger-strategy/console/log-strategy/`):
- Nested strategy pattern for formatting console output
- `ConsoleLogStrategySimple` - Human-readable format with timestamps
- `ConsoleLogStrategyNewRelicJson` - JSON format for New Relic ingestion
- `ConsoleLogStrategyPino` - Pino logger integration for production-grade logging

### Pattern Hierarchy

```
LoggerStrategy (interface)
├── LoggerStrategyVoid (no-op)
└── LoggerStrategyConsole
    └── uses ConsoleLogStrategy (interface)
        ├── ConsoleLogStrategySimple
        ├── ConsoleLogStrategyNewRelicJson
        └── ConsoleLogStrategyPino
```

## Code Conventions

- **Imports**: Use `#src` path aliases (e.g., `import { x } from '#src/log-level'`)
- **Formatting**: Tabs (size 2), max 130 chars, single quotes, no semicolons
- **Tests**: Place test files adjacent to source with `.test.ts` suffix
- **Mocks**: Store in `__mocks__/` directories alongside source files
- **ESLint/Prettier**: Configuration inherited from `@beecode/msh-config`

## Clean TypeScript Skill

This project uses the **clean-typescript** skill for Claude Code assistance. Use it for:
- Creating new logger strategies following the existing patterns
- Writing unit tests with Vitest
- Following established TypeScript patterns in the codebase
