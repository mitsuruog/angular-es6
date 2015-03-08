'use strict';

var path = require('path');
global.appRoot = path.resolve(__dirname);

require('gulp-load-plugins')();
require('require-dir')('./gulp/tasks',{recurse:true});
