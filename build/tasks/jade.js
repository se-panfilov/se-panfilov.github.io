'use strict'

const config = require('../config')
const jade = require('gulp-jade')
const minifyHTML = minifyHTML || require('gulp-minify-html')
const cachebreaker = cachebreaker || require('gulp-cache-breaker')

gulp.task('jade', () => {
  return gulp.src(config.jade.src)
    .pipe(plumber({
      errorHandler: notify.onError(err => {
        return {
          title: 'Build Jade',
          message: err
        }
      })
    }))
    .pipe(jade({ pretty: false }))
    .pipe(minifyHTML({
      empty: true,
      spare: true
    }))
    // .pipe(cachebreaker()) // TODO (S.Panfilov)fix it
    .pipe(gulp.dest(config.dest))
})
