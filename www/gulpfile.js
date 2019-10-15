var gulp = require('gulp');
var sass = require('gulp-sass');
var borwserSync = require('browser-sync').create();

function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(borwserSync.stream());
}

function watch() {
    borwserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', borwserSync.reload);
    gulp.watch('./script/**/*.js').on('change', borwserSync.reload);
}

exports.watch = watch;
exports.style = style;