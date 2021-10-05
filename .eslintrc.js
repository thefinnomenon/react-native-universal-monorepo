module.exports = {
  root: true,
  ignorePatterns: ['**/*.d.ts'],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-native', 'prettier'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
    },
    {
      files: '**/*.+(js|jsx)',
      env: {
        commonjs: true,
        es6: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
      },
      extends: ['eslint:recommended', 'prettier'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
        printWidth: 120,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
