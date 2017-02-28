var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 40 versions'))
        .pipe(cleanCSS({debug: true}, function(details) {
    }))
        .pipe(gulp.dest('prod/css'));
});


gulp.task('watch', function () {
        gulp.watch('scss/*.scss', ['sass'])
        
});
gulp.task('js-min', function () {
    gulp.src('js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('prod/js'));
});


gulp.task('default', ['sass', 'js-min']);