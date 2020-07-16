module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    // * the eslint recommended config
    'eslint:recommended',
    // * plugin rules
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 1. prettierx settings with the "standardx" style
    'plugin:prettierx/standardx',
    // 2. add exclusions for additional plugins
    'plugin:prettierx/@typescript-eslint',
    'plugin:prettierx/react',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettierx'],
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
}
