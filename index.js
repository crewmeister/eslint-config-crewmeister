module.exports = {
  extends: [
    './rules/base',
    './rules/strict',
    './rules/react',
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
