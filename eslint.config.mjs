// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: true,
      },
    },
    rules: {
      "max-len": ["error", { "code": 140, "ignoreStrings": true }], // Since humanity has invented wider monitors
      "no-restricted-syntax": "off", // Since it restricts really nice things, and performance is not an issue for this project
      "linebreak-style": 0,
      "@typescript-eslint/triple-slash-reference": "off", // Since Astro uses it
    }
  }
);