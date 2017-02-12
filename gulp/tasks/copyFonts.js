var gulp = require('gulp');
var config = require('../config').copyFonts;
var GlyphConfig = require('../config').copyGlyphs;

gulp.task('copyFonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('copyGlyphs', function() {
  return gulp.src(GlyphConfig.src)
    .pipe(gulp.dest(GlyphConfig.dest));
});