"use strict"

const gulp = require('gulp')
const config = require('../config')
const connect = require('gulp-connect')

gulp.task('dev_webserver', function () {
  return connect.server({
    root: [__dirname],
    port: 8001,
    livereload: true
  })
})