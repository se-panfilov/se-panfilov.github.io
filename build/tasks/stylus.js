'use strict'

const config = require('../config')
const nib = require('nib')
const minifyCss = require('gulp-minify-css')
const concat = require('gulp-concat')
//changed = require('gulp-changed')
const stylus = require('gulp-stylus')

gulp.task('stylus', () => {
  return gulp.src(config.styles.src)
    .pipe(plumber({
      errorHandler: notify.onError(err => {
        return {
          title: 'Build Stylus',
          message: err
        }
      })
    }))
    //TODO (S.Panfilov) check changed
    //.pipe(changed(dest.dist))
    .pipe(concat(`${config.projectName}.min.styl`))
    .pipe(stylus({ use: [nib()], compress: true }))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.dest))
})