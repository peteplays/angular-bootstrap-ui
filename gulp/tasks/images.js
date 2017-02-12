var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.dest));
});