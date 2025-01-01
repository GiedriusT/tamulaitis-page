// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // If I enable this stupid error starts popping up, ESLint is such a shitty tool with their
  // new configuration system that is incompatible with most older plugins and has a shittiest
  // documentation. It should be banned on the federal level. I'll get back to this someday
  // when I have more patience. Upgrading from v8 to v9 was enough torture for one day.
  // react.configs.flat['jsx-runtime'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
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
      // "import/no-extraneous-dependencies": ["error", { "packageDir": "./"}],
      "react/prop-types": "off", // Since we do not use prop-types
      "react/require-default-props": "off", // Since we do not use prop-types
      "max-len": ["error", { "code": 140, "ignoreStrings": true }], // Since humanity has invented wider monitors
      "no-restricted-syntax": "off", // Since it restricts really nice things, and performance is not an issue for this project
      "linebreak-style": 0,
      "@typescript-eslint/triple-slash-reference": "off", // Since Astro uses it
    }
  }
);