var gulp = require('gulp');

gulp.task('bundle', ['bundleJs', 'bundleCss', 'copyFonts', 'copyGlyphs', 'markup']);
