var gulp = require('gulp')
var svgscaler = require('svg-scaler')
var iconfont = require('gulp-iconfont')
var twig = require('gulp-twig')
var rename = require("gulp-rename")

gulp.task('icons_monochrome_font', function() {
 gulp.src(['assets/svg/*.svg'])
   .pipe(svgscaler({ scale: 10 }))
   .pipe(iconfont({
     fontName: 'icons',
     appendUnicode: false
   }))
   .on('glyphs', function(glyphs) {
     var data = {
       glyphs: glyphs,
       fontName: 'icons',
       fontPath: '../fonts',
       className: 'icon',
     };

     data.glyphs.map(function(glyph) {
       glyph.codepoint = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
       return glyph
     })

     gulp.src('./assets/templates/_icons.scss')
       .pipe(twig({data: data}))
       .pipe(rename({ extname:'.scss' }))
       .pipe(gulp.dest('assets/scss/default/elements'));

   })
   .pipe(gulp.dest('public/fonts'))
});

