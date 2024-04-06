import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended"

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginPrettierRecommended,
  {
    ignores: ["dist", "node_modules", "*.config.{mjs,cjs,js,ts}"],
  }
]
