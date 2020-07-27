/* global it, describe */

const surge = require('../')
const should = require('should')

describe('gulp-surge', function () {
  describe('basic', function () {
    it('should exist', function (done) {
      should(surge).exist
      done()
    })
  })
})
