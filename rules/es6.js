module.exports = {
  'env': {
    'es6': false
  },
  'rules': {
    // omit brackets when it supports readability
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 0,
    // require parens in arrow function arguments
    'arrow-parens': [2, 'always'],
    // require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    // verify super() callings in constructors
    'constructor-super': 0,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 0,
    // disallow modifying variables of class declarations
    'no-class-assign': 0,
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 0,
    // require let or const instead of var
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    'object-shorthand': 0,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 2,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 0,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,
    // disallow generator functions that do not have yield
    'require-yield': 0
  }
};
