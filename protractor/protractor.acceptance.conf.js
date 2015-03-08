'use strict';

var conf = require('./protractor.conf.js');
conf.config.specs = [
  '../e2e/acceptance_test/**/*.spec.js'
];

module.exports = conf;
