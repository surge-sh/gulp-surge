var gulp = require('gulp')
var surge = require('./')

gulp.task('default', ['deploy'])

gulp.task('deploy', [], function () {
  return surge({
    project: './www',
    domain: 'gulp-test-11.surge.sh'
  })
})
