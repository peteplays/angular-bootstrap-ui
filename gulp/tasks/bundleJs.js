var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');
var partialify = require('partialify');
var config = require('../config').bundleJs;

function initBundler(watch) {

  var bundler = browserify({
    cache: {}, packageCache: {}, fullPaths: false,   // Required watchify args
    entries: config.entry,    // Specify the entry point of your app
    extensions: [],     // Add file extentions to make optional in your requires
    debug: true     // Enable source maps!
  });

  var bundle = function() {
    console.log('Starting bundle');

    return bundler
      .transform(partialify)
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('bundle.js'))
      // Specify the output destination
      .pipe(gulp.dest(config.dest))
      .on('end', function() {
        console.log('Finished bundle.');
      });
  };

  if (watch) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', function() {
      var that = this;
      // gulp.start('jshint', function(err) {
        //TODO Figure out a way to not bundle if jshint fails
        bundle();
      // });
    });
  }

  return bundle();
}

gulp.task('bundleJs', function() {
  return initBundler();
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}
