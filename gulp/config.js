var dest = "./www";
var src  = "./src";

module.exports = {
  files: {
    scripts: src + '/app/**/*.js',
    html: src + '/app/**/*.html',
    less: src + '/app/**/*.less'
  },
  markup: {
    src: src + "/app/index.html",
    dest: dest
  },
  bundleJs: {
    entry: src + '/app/app.js',
    dest: dest + '/dist/js/'
  },
  bundleCss: {
    src: src + '/app/app.less',
    dest: dest + '/dist/css/'
  },
  copyFonts: {
    src: 'node_modules/font-awesome/fonts/**',
    dest: dest + '/dist/fonts'
  },
  copyGlyphs: {
    src: 'node_modules/bootstrap/dist/fonts/**',
    dest: dest + '/dist/fonts'
  },
  minify: {
    src: dest + '/dist/css/bundle.css',
    dest: dest + '/dist/css/'
  },
  uglify: {
    src: dest + '/dist/js/bundle.js',
    dest: dest + '/dist/js/'
  },
  images: {
    src: [
      src + '/app/images/**'
    ],
    dest: dest + '/dist/images'
  }
};
