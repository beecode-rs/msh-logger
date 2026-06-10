export type ObjectType = Record<string, unknown>

export const objectUtil = {
	merge<T extends ObjectType>(base: T | undefined, override: T | undefined): ObjectType | undefined {
		if (!base && !override) {
			return undefined
		}

		return { ...base, ...override }
	},
}
