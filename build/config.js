'use strict';

const SRC = 'src';
const DEST = 'dist';
const PROJECT_NAME = 'se-panfilov';
const TESTS_SRC = 'test';

const config = {
  SRC: SRC,
  dest: DEST,
  projectName: PROJECT_NAME,
  js: {
    src: [
      SRC + '/**/*.js'
    ]
  },
  styles: {
    src: [
      SRC + '/**/*.styl'
    ]
  },
  jade: {
    src: [
      SRC + '/**/*.jade'
    ]
  },
  tests: {
    src: [TESTS_SRC]
  }
};

module.exports = config;
