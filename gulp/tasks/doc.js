/*jslint node: true */
'use strict';

var gulp = require('gulp');
var yuidoc = require('gulp-yuidoc');
var config = require('../gulp.config');

gulp.task('doc:gen', ['clean:doc'], function(){
  return gulp.src(config.app.js)
    .pipe(yuidoc())
    .pipe(gulp.dest(config.test.doc.src));
});

gulp.task('doc:open', ['browser-sync:doc']);

gulp.task('doc', ['doc:gen', 'doc:open']);

gulp.task('doc:test', ['doc'],function(){
  process.exit();
});

