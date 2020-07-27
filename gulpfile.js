const {src, parallel} = require('gulp')
const surge = require('./')
const mocha = require('gulp-mocha')
const standard = require('gulp-standard')

const lint = () => {
  return src(['./index.js', './test/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
}

const test = () => {
  return src('./test/**/*.js', { read: false })
    .pipe(mocha({ timeout: 1000 }))
}

const deploy = () => {
  return surge({
    project: './test/fixtures/gulp-test-1.surge.sh',
    domain: 'gulp-test-1.surge.sh'
  })
}

tasks = [lint, test, deploy]

exports.default = parallel(...tasks)
