import {
  src, dest,
  parallel, series,
  watch
} from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import pug from 'gulp-pug';
import browserSync from 'browser-sync';

const compileSCSS = () => {
  return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

const compilePug = () => {
  return src('src/layout/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });

  watch('src/*.scss', compileSCSS);
  watch('src/layout/*.pug', compilePug);
}

export const build = parallel(compileSCSS, compilePug);
export const server = browserSyncJob;
export const development = series(build, server);
