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
  ].map(require.resolve),
  parser: 'babel-eslint',
  globals: {
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true,
    describe: true,
    it: true,
  },
  rules: {
    'arrow-body-style': [0],
    'react/jsx-no-bind': [0],
    'object-shorthand': [0],
  },
};
