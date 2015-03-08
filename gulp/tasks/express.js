/*jslint node: true */
'use strict';

// https://github.com/JacksonGariety/gulp-nodemon
var nodemon = require('gulp-nodemon');
var gulp = require('gulp');

// express(mock)
gulp.task('express:dev', function(){
  nodemon({
    script: './server/app.js',
    env: {
      // just: outer file
      'PORT': 8000
    }
  });
});
