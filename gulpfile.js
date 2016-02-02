var gulp = require('gulp')
var requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('server', ['icons_monochrome_font', 'icons_monochrome_demo', 'sass', 'js', 'connect', 'watch']);
gulp.task('production', ['icons_monochrome_font', 'icons_monochrome_demo', 'sass', 'js']);

gulp.task('default', ['help']);
