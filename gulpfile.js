'use strict'

const gulp = require('gulp')
const config = require('./build/config.js')
const requireDir = require('require-dir')
requireDir('./build', { recurse: true })

gulp.task('default', () => {
  gulp.start('make')
  gulp.start('todo')
  gulp.start('watch')
})

gulp.task('watch', () => {
  const watch = require('gulp-watch')
  gulp.watch(config.js.src, ['es5', 'todo'])
  gulp.watch(config.jade.src, ['jade'])
  gulp.watch(config.styles.src, ['stylus'])
})