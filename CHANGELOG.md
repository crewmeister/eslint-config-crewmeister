# 2.1.0 (2016-07-29)

- Turn the `arrow-body-style` rule off, so we are completely free in how we use it.
- Don't complain about `xit` and `xdescribe` anymore.
- Turn off `react/jsx-no-bind` rule.
- Turn off `object-shorthand`, since we want to allow code like `{ x: x }` which makes refactoring easier.
- Upgrade eslint to v3.
- Add some examples in `example.js`.

# 2.0.0 (2016-02-19)

- Allow some more test functions, such as `beforeEach, before, ...` 8ef4d85fd4fc
- Proper include through the package name, not an absolute path which assumed the package is installed in here. 9a26bc83881 
- provide a CHANGELOG.md

# 1.0.0 (2016-02-17)

- the initial relase
- provides an executable `eslint-crewmeister` which is just a crewmeister-configured `eslint`
- derives from the airbnb lint rules