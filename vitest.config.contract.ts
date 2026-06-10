import { ContractReporter } from '@beecode/msh-test-contractor/contract-reporter'
import { contractYamlPlugin } from '@beecode/msh-test-contractor/vitest-plugin'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [contractYamlPlugin()],
	resolve: { tsconfigPaths: true },
	test: {
		coverage: {
			exclude: [...coverageConfigDefaults.exclude],
		},
		include: ['src/**/*.contract.yaml'],
		mockReset: true,
		passWithNoTests: true,
		reporters: [new ContractReporter()],
		setupFiles: ['./src/__tests__/index-vitest-setup.ts'],
		watch: false,
	},
})
