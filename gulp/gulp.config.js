// jspm config
var package_config = require('../package.json');

var System = require('systemjs');
require('../' + package_config.jspm.directories.baseURL + '/config.js');

module.exports = {
  System: {
    transpiler: System.transpiler
  },
  app:{
    src: 'client/**/*',
    js : './client/app/**/*!(spec).js'
  },
  report:{
    covorage:      './report/coverage',
    lcov:          './report/lcov',
    covorage_view: './report/coverage/firefox',
    lcov_report:   './report/lcov/firefox'
  },
  test:{
    e2e:{
      tmp: './.tmp/e2e',
      src: './e2e/**/*.js'
    },
    app:{
      src: './client/app/**/*!(spec).js',
    },
    doc:{
      src: './doc'
    }
  }
};