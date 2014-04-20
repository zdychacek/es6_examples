var gulp = require('gulp');
var http = require('http');
var ecstatic = require('ecstatic');
var traceur = require('gulp-traceur');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');

var serverport = 8000;

gulp.task('scripts', function() {
  return gulp.src('app/*.js')
    .pipe(traceur({ sourceMaps: false, modules: 'amd' }))
    .pipe(gulp.dest('./app-built'));
});

gulp.task('build', function() {
    rjs({
      baseUrl: '.',
      out: 'app-built.js',
      name: 'app-built/main',
      paths: {
        app: 'app-built'
      }
    })
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('serve', function() {
  http.createServer(ecstatic({ root: __dirname })).listen(serverport);
});

gulp.task('watch', function() {
  gulp.watch('app/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['scripts', 'serve', 'watch']);
