var gulp = require('gulp');
var config = require('../config').files;

gulp.task('watchCss', function() {
  gulp.watch(config.less, ['bundleCss']);
});

gulp.task('watchJs', function() {
  gulp.watch([config.scripts, config.html], ['bundleJs']);
});

gulp.task('watch', ['watchJs', 'watchCss', 'markup']);
