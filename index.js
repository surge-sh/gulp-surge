var gulp = require('gulp')
var spawn = require('child_process').spawn
var gutil = require('gulp-util')
var path = require('path')
// var surge = require('surge')
var surgeBin = path.resolve(path.dirname(require.resolve('surge')), '../../.bin/surge' + (process.platform === 'win32' ? '.cmd' : ''))

module.exports = function(options) {

  // Merge the default options with task specific ones
  // var opts = options({
  //   project: '',
  //   domain: ''
  // })

  var surge = spawn(surgeBin, [options.project, options.domain])

  surge.stdout.on('data', function (data) {
    console.log(data + '')
  })

  surge.stderr.on('data', function (data) {
    gutil.log('stderr: ' + data)
  })

  surge.on('close', function (code) {
    if (code !== 0) {
      gutil.log('process exited with code ' + code)
    }
  })

}
