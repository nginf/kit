// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../../eslint.config.js');

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'kt',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'kt',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'class',
          format: ['PascalCase'],
          prefix: ['kt'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          prefix: ['kt'],
          filter: {
            regex: '^_',
            match: false,
          },
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  }
);
