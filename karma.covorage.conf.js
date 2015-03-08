module.exports = function(config) {
  function normalizationBrowserName(browser) {
    return browser.toLowerCase().split(/[ /-]/)[0];
  }
  var babelOptions = require('./.babelrc');
  config.set({
    frameworks: ['mocha', 'jasmine'],
    files: ['node_modules/babel-core/browser-polyfill.js'],
    preprocessors: {
      'client/app/**/*.spec.js': ['babel'],
      'client/app/**/!(*.spec).js': ['coverage']
    },

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //'Firefox', 'Chrome', 'PhantomJS'
    browsers: ['Firefox'],
    reporters: ['progress', 'coverage'],

    babelPreprocessor: {
      options: babelOptions
    },

    jspm: {
      //useBundles: true,
      config: 'client/config.js',
      packages: 'client/jspm_packages/',
      loadFiles: [
        'client/app/**/*.spec.js'
      ],
      serveFiles: [
        'client/app/**/!(*spec|*mock).js',
        'client/**/*.png',
        'client/**/*.ico',
        'client/**/*.css',
      ]
    },

    proxies: {
      '/base/jspm_packages/': '/base/client/jspm_packages/',
    },

    coverageReporter: {
      // configure the reporter to use isparta for JavaScript coverage
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        '**/*.js': 'isparta'
      },

      instrumenterOptions: {
        isparta: {
          babel: babelOptions
        }
      },

      reporters: [{
        type: 'text',
        subdir: normalizationBrowserName
      }, {
        type: 'lcov',
        dir: 'report/lcov/',
        subdir: normalizationBrowserName
      }, {
        type: 'html',
        dir: 'report/coverage/',
        subdir: normalizationBrowserName
      }],
    },

    // web server port
    port: 9876,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    singleRun: true,

  });
};
