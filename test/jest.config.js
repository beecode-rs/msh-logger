export default {
	clearMocks: true,
	extensionsToTreatAsEsm: ['.ts'],
	moduleFileExtensions: ['js', 'ts'],
	preset: 'ts-jest/presets/default-esm',
	setupFilesAfterEnv: ['jest-extended/all'],

	// preset: 'ts-jest',
	testEnvironment: 'node',

	testPathIgnorePatterns: ['/node_modules/'],
	transform: {},
}
