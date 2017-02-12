var gulp = require('gulp');
var rename = require('gulp-rename');
var minify = require('gulp-clean-css');
var config = require('../config').minify;

gulp.task('minify', ['bundleCss'], function() {
  return gulp.src(config.src)
    .pipe(minify())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest(config.dest));
});
