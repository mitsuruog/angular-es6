/*jslint node: true */
'use strict';

var gulp        = require('gulp');
var gprot       = require("gulp-protractor");
var browserSync = require('browser-sync');

var protractor = gprot.protractor;
var webdriver_standalone = gprot.webdriver_standalone;
var webdriver_update = gprot.webdriver_update;
var paths = gulp.paths;

gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver_standalone', webdriver_standalone);

var runProtractor = function(done){

  gulp.src(['./.tmp/e2e/**/*.spec.js'])
    .pipe(protractor({
      configFile: './protractor/protractor.conf.js'
    })).on('error', function(e) {
      process.stdout.write(e + '\n');
      throw e;
    }).on('end', function(){
      browserSync.exit();
      done();
    });        
};


gulp.task('protractor', [
    'lint',
    'build-es6:e2e',
    'webdriver_update',
    'browser-sync:test',
    'express:dev'
  ], 
  runProtractor);