# eslint-config-crewmeister
The eslint config we use at crewmeister.

In order to asure we all use the same coding style across crewmeister,
this repo defines the rules executed by eslint.

# Usage

In any repo (that should be an npm package) install it like this
```bash
npm install eslint-config-crewmeister --save-dev
```
In order to use it, you can call `eslint-crewmeister` from within the project.
The above install adds the executable to your `node_modules/bin` folder.
You should add it to the `package.json` inside the scripts directory, e.g. like this
```js
"scripts": {
  // ...
  "lint": "eslint-crewmeister src"
  // ...
}
```
Best practice is also to use the lint before the test run, so that no
lint errors slips through. E.g. like this
```js
"scripts": {
  // ...
  "test": "npm run lint && ..."
  // ...
}
```

# Development

In development mode, where you also want to work on this repo here
do the following:
```bash
> cd crewmeister/repos/eslint-config-crewmeister
npm link # creates a local sym link that refers to this repo here

> cd crewmeister/repos/<what-you-are-working-on>
> npm link eslint-config-crewmeister # use the sym link created above
```

# Release

1) update the [CHANGELOG.md]
1) use `npm version major` to go up to the next version, always going up to next major for now

# The Coding Style

By default our coding style is derived from the [airbnb style].
All modifications/addons are added here.

## Table of Contents

  1. [Globals](#globals)

## Globals

- [1.1](#1.1) <a name='1.1'></a> **Globals**: For the tests we provide `it` and `describe` as globals


[airbnb style]: https://github.com/airbnb/javascript#table-of-contents
