var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('js', function () {
  gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/js-yaml/dist/js-yaml.js',
    './node_modules/twig/twig.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/marked/lib/marked.js',
    './assets/js/**/*.js',
    ])
    .pipe(concat('script.js'))
//  .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});