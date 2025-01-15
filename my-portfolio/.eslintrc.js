// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      // Add or override rules as needed
    },
  };
  