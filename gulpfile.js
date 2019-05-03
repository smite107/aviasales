const gulp        = require('gulp'),
      sass        = require('gulp-sass'),
      plumber     = require('gulp-plumber'),
      cleanCSS    = require('gulp-clean-css'),
      eslint      = require('gulp-eslint'),
      sourcemaps  = require('gulp-sourcemaps');

const { watch, series, src, dest, task } = gulp;

let onError = function(err) {
  this.emit('end');
};

let plumberOptions = {
  errorHandler: onError,
};

function scss() {
  return src('src/sass/**/*.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(dest('public/css'));
}

function js() {
  return src(['src/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

//gulp.task('watch', gulp.series('watch', () => {
//  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
//}));

function watchSCSS(cb) {
  scss();
  watch('src/sass/**/*.scss', scss);
  cb();
}

function watchJS(cb) {
  js();
  watch('src/js/**/*.js', js);
  cb();
}

exports.watch = series(watchSCSS, watchJS);