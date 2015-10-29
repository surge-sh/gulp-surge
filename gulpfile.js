var gulp = require('gulp')
var surge = require('./')
var mocha = require('gulp-mocha')
var standard = require('gulp-standard')

gulp.task('default', ['test', 'deploy', 'lint'])

gulp.task('test', function () {
  return gulp.src('./test/**/*.js', { read: false })
    .pipe(mocha({ timeout: 1000 }))
})

gulp.task('deploy', [], function () {
  return surge({
    project: './test/fixtures/gulp-test-1.surge.sh',
    domain: 'gulp-test-1.surge.sh'
  })
})

gulp.task('lint', [], function () {
  return gulp.src(['./index.js', './test/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
})
