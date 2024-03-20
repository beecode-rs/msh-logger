import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
	clearMocks: true,
	maxConcurrency: 1,
	preset: 'ts-jest/presets/default-esm',
	setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/src/index-jest-setup.ts'],
	testEnvironment: 'node',
	moduleNameMapper: {
		'(.*)/dist/(.*).js': '$1/src/$2.ts',
	},
	testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	transform: {},
}

export default jestConfig
