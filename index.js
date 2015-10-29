'use strict'

// var gutil = require('gulp-util')
var spawn = require('child_process').spawn
var path = require('path')
// var surge = require('surge')
var surge = path.resolve(path.dirname(require.resolve('surge')), '../../.bin/surge' + (process.platform === 'win32' ? '.cmd' : ''))

module.exports = function (options) {
  return spawn(surge, [options.project, options.domain], { stdio: 'inherit' })
}
