'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');

gulp.task('test-local', ['bundle', 'watch'], function (done) {
  new Server({
    configFile: path.resolve('karma.conf.js'),
    autoWatch: true,
    colors: true
  }, done).start();
});

gulp.task('testCI', ['images', 'bundle', 'minify'], function (done) {
  new Server({
    configFile: path.resolve('karma.conf.js'),
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true,
    colors: true
  }, done).start();
});
