'use strict';

var conf = require('./protractor.acceptance.conf.js');

conf.config.onPrepare = function(){
  require('jasmine-reporters');
  jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('report/ci', true, true)
      );
}
module.exports = conf;
