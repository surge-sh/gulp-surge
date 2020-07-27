'use strict'

const spawn = require('child_process').spawn
const path = require('path')

const surge = path.resolve(
  path.dirname(require.resolve('surge')),
  '../../.bin/surge' + (process.platform === 'win32' ? '.cmd' : '')
)

module.exports = (options) => {
  spawn(surge, [options.project, options.domain], { stdio: 'inherit' })
}
