module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/legacy',
    './rules/node',
    './rules/react',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/globals',
    './rules/modules',
    './rules/flow',
    './rules/tests',
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {},
};
