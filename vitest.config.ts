import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	resolve: { tsconfigPaths: true },
	test: {
		coverage: {
			exclude: [...coverageConfigDefaults.exclude],
		},
		mockReset: true,
		passWithNoTests: true,
		reporters: ['verbose'],
		setupFiles: ['./src/__tests__/index-vitest-setup.ts'],
		watch: false,
	},
})
