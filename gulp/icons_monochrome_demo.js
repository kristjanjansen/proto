var path = require('path')

var gulp = require('gulp')
var tap = require('gulp-tap')
var twig = require("gulp-twig");
var rename = require("gulp-rename")

gulp.task('icons_monochrome_demo', function () {

var files = []

  gulp.src('./assets/svg/*.svg')
    .pipe(tap(function(filepath) {
       files.push(path.basename(filepath.path, '.svg'))
     }))
    .on('end', function() {
      gulp.src('./assets/templates/icons.html')
        .pipe(twig({data: {
          files: files
        }}))
       .pipe(gulp.dest('public/html/components'))
    })


})