const gulp = require('gulp')
const minifyCss = require('gulp-minify-css')

gulp.task('css', () => {
    return gulp.src('src/css/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'))
});