var gulp = require('gulp');
var http = require('http');
var ecstatic = require('ecstatic');

var serverport = 8000;

gulp.task('serve', function() {
  http.createServer(ecstatic({ root: __dirname })).listen(serverport);
});

// Default Task
gulp.task('default', ['serve']);
