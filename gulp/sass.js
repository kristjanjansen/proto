var gulp = require('gulp')
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var rename = require("gulp-rename")

gulp.task('sass', function () {
  gulp.src('./assets/scss/**/base.scss')
    .pipe(sass())
//  .pipe(cssnano())
    .pipe(rename(function (path) {
      path.basename = path.dirname
      path.dirname = ''
    }))        
    .pipe(gulp.dest('./public/css'));
});