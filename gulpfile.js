const {
  src, dest,
  parallel, series,
  watch
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const compileSCSS = () => {
  return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

const compilePug = () => {
  return src('src/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });

  watch('src/*.scss', compileSCSS);
  watch('src/*.pug', compilePug);
}

exports.build = parallel(compileSCSS, compilePug);
exports.server = browserSyncJob;
exports.development = series(build, server);
