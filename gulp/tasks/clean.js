/*jslint node: true */
'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../gulp.config');

gulp.task('clean', ['clean:e2e','clean:doc','clean:fxos']);

gulp.task('clean:e2e', function (cb) {
  del([
    config.test.e2e.tmp
  ], cb);
});

gulp.task('clean:doc', function (cb) {
  del([
    config.test.doc.src
  ], cb);
});

gulp.task('clean:fxos', function (cb) {
  del([
    config.fxos.tmp
  ], cb);
});

gulp.task('clean:covorage', function (cb) {
  del([
    config.report.covorage,
    config.report.lcov
  ], cb);
});
