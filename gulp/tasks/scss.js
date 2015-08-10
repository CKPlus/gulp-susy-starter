var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').css;

gulp.task('scss', function () {
  gulp.src(config.src)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: "compressed"
    }))
    .pipe(gulp.dest(config.dest));
});