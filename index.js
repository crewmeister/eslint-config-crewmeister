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
    'object-shorthand': ['off'],
    'react/jsx-no-bind': ['off'],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/no-multi-comp': ['off'],
    'no-underscore-dangle': ['off']
  },
};
