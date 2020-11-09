module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 120,
        arrowParens: 'avoid',
        tabWidth: 2,
        useTabs: false,
        semi: true,
        encoding: 'utf-8',
        extensions: ['.js'],
      },
    ],
  },
};
