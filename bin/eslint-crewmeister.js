#!/usr/bin/env node
var cli = require('eslint/lib/cli');

var path = require('path');
var eslintConfig = path.join(__dirname, '..', 'index.js');

var argv = process.argv;
argv.push('--config=' + eslintConfig);

var result = cli.execute(argv);
process.exit(result);
