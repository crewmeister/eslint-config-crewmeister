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
  },
  rules: {
    'arrow-body-style': [0]
  }
};
