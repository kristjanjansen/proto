var gulp = require('gulp')
var connect = require('gulp-connect')
var open = require('open');

var port = 8000

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: port
  })
  open('http://localhost:' + port)
});