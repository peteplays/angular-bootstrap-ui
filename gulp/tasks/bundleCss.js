var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var config = require('../config').bundleCss;

gulp.task('bundleCss', function() {
  return gulp.src(config.src)
    .pipe(less({
      paths: ['.']
    }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(config.dest));
});
