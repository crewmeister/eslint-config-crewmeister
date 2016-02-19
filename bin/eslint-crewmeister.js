#!/usr/bin/env node
var cli = require('eslint/lib/cli');

var path = require('path');
var eslintConfig = path.join(__dirname, '..', 'index.js');

try {
  var argv = process.argv;
  argv.push('--config=' + eslintConfig);
  cli.execute(argv);
} catch (ex) {
  console.error(ex.message);
  console.error(ex.stack);
}