var gulp = require('gulp');
var sass = require('gulp-sass');
var borwserSync = require('browser-sync').create();

function style() {
    return gulp.src('./sass/**/*.scss')
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
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', borwserSync.reload);
    gulp.watch('./script/**/*.js').on('change', borwserSync.reload);
}

exports.default = watch;
exports.style = style;