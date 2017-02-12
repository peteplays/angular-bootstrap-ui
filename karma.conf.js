module.exports = function(config) {

  config.set({
    frameworks: ['jasmine'],
    reporters: ['progress'],
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher'],
    browsers: ['Chrome'],
    files: [
      'www/dist/js/bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/moment/moment.js',
      'src/app/**/**/*.mock.js',
      'src/app/**/*.test.js'
    ]
  });
};
