var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('serve', ['nodemon'], function() {
  browserSync({
    port: 5555,
    proxy: "http://localhost:4000",
    files: [
      "www/**"
    ]
  });
});
