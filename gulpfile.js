var gulp = require('gulp');
var http = require('http');
var ecstatic = require('ecstatic');
var traceur = require('gulp-traceur');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var refresh = require('gulp-livereload');
var clean = require('gulp-clean');
var lr = require('tiny-lr');
var lrserver = lr();

var livereloadport = 35729;
var serverport = 8000;

var srcFolder = 'app';
var distFolder = 'dist';

gulp.task('scripts', function() {
  return gulp.src(srcFolder + '/*.js')
    .pipe(traceur({ modules: 'amd' }))

    .pipe(gulp.dest(distFolder))
    .pipe(refresh(lrserver));
});

gulp.task('build', function() {
    rjs({
      baseUrl: '.',
      out: distFolder + '/all.min.js',
      name: srcFolder + '/main',
      paths: {
        app: 'dist'
      }
    })
    .pipe(uglify())
    .pipe(gulp.dest('.'))
    .pipe(refresh(lrserver));
});

gulp.task('serve', function() {
  http.createServer(ecstatic({ root: __dirname })).listen(serverport);
  lrserver.listen(livereloadport);
});

gulp.task('clean', function() {
  gulp.src(distFolder, {read: false})
    .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch(srcFolder + '/*.js', ['scripts']);
});

gulp.task('default', ['clean', 'scripts', 'serve', 'watch']);
