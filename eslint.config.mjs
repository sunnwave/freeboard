import globalsOriginal from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

// globals.browser에서 키 공백 제거 함수
function cleanGlobals(orig) {
  const clean = {};
  for (const key in orig) {
    const trimmedKey = key.trim();
    if (trimmedKey) {
      clean[trimmedKey] = orig[key];
    }
  }
  return clean;
}

const cleanedGlobalsBrowser = cleanGlobals(globalsOriginal.browser);

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'out/**'],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: cleanedGlobalsBrowser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
