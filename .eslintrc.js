module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: { react: { version: 'detect' } },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  overrides: [
    {
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
            paths: ['src'],
          },
        },
      },
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint', 'react-hooks'],
      rules: {
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            // hoist functions (not variables)
            functions: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            // no delimiters for interfaces
            multiline: {
              delimiter: 'none',
              requireLast: false,
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/indent': 'off',
        'no-unused-vars': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}
