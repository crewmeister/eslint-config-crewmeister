module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'flowtype'
  ],
  'rules': {
    'flowtype/define-flow-type': 1,
    // 'flowtype/no-weak-types': 1,
    // 'flowtype/require-parameter-type': 1,
    // 'flowtype/require-return-type': [
    //   1,
    //   'always',
    //   {
    //     'annotateUndefined': 'never'
    //   }
    // ],
    'flowtype/semi': [
      1,
      'always'
    ],
    'flowtype/space-after-type-colon': [
      1,
      'always'
    ],
    'flowtype/space-before-type-colon': [
      1,
      'never'
    ],
    'flowtype/type-id-match': [
      1,
      '^([A-Z][a-z0-9]+)+Type$'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    }
  }
};
