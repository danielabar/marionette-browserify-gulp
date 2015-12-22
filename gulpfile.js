var browserify = require('browserify'),
  watchify = require('watchify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  sourceFile = 'app/src/app.js',
  destFolder = 'app/src/',
  destFile = 'bundle.js';

var props = {
  entries: ['app/src/app.js'],
  debug: true,
  cache: {},
  packageCache: {},
};

gulp.task('browserify', function() {
  return browserify(props)
    .bundle()
    .pipe(source(destFile))
    .pipe(gulp.dest(destFolder));
});

// FIXME Cannot read property cache of undefined
gulp.task('watch', function() {
  var bundler = watchify(props);
  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle()
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder));
  }

  return rebundle();
});

gulp.task('default', ['browserify', 'watch']);
