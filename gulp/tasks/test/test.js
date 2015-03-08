/*jslint node: true */
'use strict';

var gulp = require('gulp');

// Test のalias
gulp.task('test:unit',['karma']);
gulp.task('test:e2e',['protractor']);

