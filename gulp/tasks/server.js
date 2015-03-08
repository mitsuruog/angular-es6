/*jslint node: true */
'use strict';

var gulp = require('gulp');

gulp.task('serve', [
  'lint',
  'browser-sync',
  'express:dev'
]);

gulp.task('serve:test', ['serve'],function(){
  process.exit();
});
