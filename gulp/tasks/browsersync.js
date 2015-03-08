/*jslint node: true */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var spa         = require("browser-sync-spa");
var config = require('../gulp.config');

var defaultSyncFile = [
    './client/app/**/*.js',
    './client/app/**/*.css',
    './client/**/*.html',
    '!./client/jspm_packages/**/*'
  ];

browserSync.use(spa({
    selector: "index.html" // Only needed for angular apps
}));

gulp.task('browser-sync', function() {
  browserSync.init(defaultSyncFile,{
      notify: true,
      server: {
        baseDir: ['./client']
      },
      port: 9000,
      ui: {
        port: 3000,
        weinre: {port: 3050 }
      },
      // firefox, google chrome, 
      browser: ['google chrome'],
      tunnel: false
    });
});

gulp.task('browser-sync:test', function() {
  browserSync.init(defaultSyncFile,{
      notify: false,
      open: false,
      server: {
        baseDir: ['./client']
      },
      port: 9000,
      ui: {
        port: 3000,
        weinre: {port: 3050 }
      }
    });
});

gulp.task('browser-sync:report', function() {
  browserSync.init(['./report/**/*'],{
      notify: false,
      open: true,
      server: {
        baseDir: [config.report.covorage_view]
      },
      port: 9001,
      ui: {
        port: 3001,
        weinre: {port: 3051 }
      }
    });
});

gulp.task('browser-sync:doc', function() {
  browserSync.init(['./doc/**/*'],{
      notify: false,
      open: true,
      server: {
        baseDir: ['./doc']
      },
      port: 9002,
      ui: {
        port: 3002,
        weinre: {port: 3052 }
      }
    });
  gulp.watch(config.app.js, ['doc:gen']);
});
