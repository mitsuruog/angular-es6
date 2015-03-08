/*jslint node: true */
'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('karma', function(done) {
  karma.start({
    configFile: global.appRoot + '/karma.conf.js'
  }, done);
});
