const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const { src, parallel, dest } = require('gulp');


const jsPath = 'src/assets/js/**/*.js';
const cssPath = 'src/assets/css/**/*.css';

function buildHTML() {
    return src('src/*.html').pipe(gulp.dest('dist'));
}

function exportDocs() {
    return src('src/assets/docs/*').pipe(gulp.dest('dist/assets/docs'));
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
    .pipe(concat('all.css'))
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'));
}

function fontsTask() {
    return src('src/assets/fonts/**/*').pipe(gulp.dest('dist/assets/fonts'));
}



/*function watchTask() {
    watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
}*/


exports.exportDocs = exportDocs;
exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.fontsTask = fontsTask;

exports.build = parallel(buildHTML, cssTask, imgTask, jsTask, exportDocs, fontsTask);