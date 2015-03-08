/*jslint node: true */
'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('report',['karma:cov'],function(){
  gulp.run('browser-sync:report');
});
gulp.task('report:ci',['karma:cov']);

