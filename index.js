module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true,
    describe: true,
    it: true,
    xit: true,
    xdescribe: true,
  },
  rules: {
    'arrow-body-style': ['off'],
    'react/jsx-no-bind': ['off'],
    'object-shorthand': ['off'],
  },
};
