module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'jsx-a11y',
    'import',
    'react-refresh',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
  },
};