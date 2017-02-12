var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var config = require('../config').uglify;

gulp.task('uglify', ['bundleJs'], function() {
  return gulp.src(config.src)
    .pipe(uglify({mangle: false}))
    .on('error', gutil.log)
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest(config.dest));
});
