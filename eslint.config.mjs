// import { defineConfig } from 'eslint/config'
// import tseslint from '@electron-toolkit/eslint-config-ts'
// import eslintConfigPrettier from '@electron-toolkit/eslint-config-prettier'
// import eslintPluginReact from 'eslint-plugin-react'
// import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
// import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'

// export default defineConfig(
//   { ignores: ['**/node_modules', '**/dist', '**/out'] },
//   tseslint.configs.recommended,
//   eslintPluginReact.configs.flat.recommended,
//   eslintPluginReact.configs.flat['jsx-runtime'],
//   {
//     settings: {
//       react: {
//         version: 'detect'
//       }
//     }
//   },
//   {
//     files: ['**/*.{ts,tsx}'],
//     plugins: {
//       'react-hooks': eslintPluginReactHooks,
//       'react-refresh': eslintPluginReactRefresh
//     },
//     rules: {
//       ...eslintPluginReactHooks.configs.recommended.rules,
//       ...eslintPluginReactRefresh.configs.vite.rules
//     }
//   },
//   eslintConfigPrettier
// )

import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  }
])
