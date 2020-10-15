const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const { src, series, parallel, dest, watch } = require('gulp');


const jsPath = 'src/js/**/*.js';
const cssPath = 'src/styles/**/*.css';

function copyIndex() {
    return src('src/*.html').pipe(gulp.dest('dist'));
}

function copySuccess() {
    return src('src/success/*.html').pipe(gulp.dest('dist/success'));
}

function exportDocs () {
    return src('src/docs/*').pipe(gulp.dest('dist/assets/docs'))
}

function imgTask() {
    return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function jsTask() {
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));
}

function cssTask() {
    return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'));
}

function fontsTask() {
    return src('src/Fonts/**/*').pipe(gulp.dest('dist/assets/fonts'));
}

function watchTask() {
    watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
}

exports.exportDocs = exportDocs;
exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.default = series(parallel(copyIndex, copySuccess, imgTask, jsTask, cssTask, fontsTask, exportDocs),watchTask);