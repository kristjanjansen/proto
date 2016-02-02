var gulp = require('gulp')

gulp.task('watch', function() {
  gulp.watch('./assets/scss/**', ['sass']);
  gulp.watch('./assets/js/**', ['js']);
  gulp.watch('./assets/svg/monochrome/**', ['icons_monochrome', 'sass']);
  gulp.watch('./assets/svg/color/**', ['icons_color', 'sass']);
  gulp.watch('./assets/png/**', ['icons_bitmap', 'sass']);
});