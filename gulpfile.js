/* eslint-disable arrow-body-style */

import {
  src, dest,
  parallel, series,
  watch,
} from 'gulp';
import pug from 'gulp-pug';
import ttfToWoff2 from 'gulp-ttftowoff2';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

const cleanBuild = () => {
  return deleteAsync(['build/**', '!build/']);
};

const compileSCSS = () => {
  return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const compilePug = () => {
  return src('src/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const compileFonts = () => {
  return src('src/**/*.ttf')
    .pipe(ttfToWoff2())
    .pipe(dest('build/'));
};

const minifyImg = () => {
  return src('src/**', { encoding: false })
    .pipe(imagemin())
    .pipe(dest('build/'));
};

const browserSyncJob = () => {
  browserSync.init({
    server: 'build/',
  });

  watch('src/*.scss', compileSCSS);
  watch('src/*.pug', compilePug);
};

export const build = parallel(compileSCSS, compilePug, compileFonts, minifyImg);
export const server = browserSyncJob;
export const development = series(build, server);
export const clean = cleanBuild;
