/*jslint node: true */
'use strict';

var gulp = require('gulp');
var config = require('../gulp.config');

// es6 transpiler
var babel = require('gulp-babel');
var traceur = require('gulp-traceur');
var transpiler = (config.System.transpiler === 'babel')?babel:traceur;

gulp.task('build-es6:e2e', ['clean:e2e'], function(){
  return gulp.src(config.test.e2e.src)
    .pipe(transpiler())
    .pipe(gulp.dest(config.test.e2e.tmp));
});
