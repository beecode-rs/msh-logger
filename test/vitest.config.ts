import { defineConfig } from 'vitest/config'

export default defineConfig({
	resolve: { tsconfigPaths: true },
	test: {
		mockReset: true,
		passWithNoTests: true,
		setupFiles: ['./index-vitest-setup.ts'],
		watch: false,
	},
})
