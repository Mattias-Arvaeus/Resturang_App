var gulp = require('gulp');
var sass = require('gulp-sass');
var borwserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(borwserSync.stream());
}

function jsTask() {
    return gulp.src('./script/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist')
        .pipe(borwserSync.stream()));
}

function watch() {
    borwserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', borwserSync.reload);
    gulp.watch('./script/**/*.js', jsTask);
}

exports.watch = watch;
exports.style = style;
exports.jsTask = jsTask;