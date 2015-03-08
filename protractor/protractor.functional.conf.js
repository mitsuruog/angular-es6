'use strict';

var conf = require('./protractor.conf.js');
conf.config.specs = [
  '../e2e/functional_test/**/*.spec.js'
];

module.exports = conf;
