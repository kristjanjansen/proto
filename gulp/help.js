var gulp = require('gulp')

gulp.task('help', function() {
  console.log('\nUsage:\n')
  console.log('gulp server\tSets up development server and watches your asset file changes')
  console.log('gulp production\tPrepares your assets for production')
  console.log('gulp help\tDisplays this page')
  console.log('\n')
});