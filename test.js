/*!
 * right-pad-keys <https://github.com/jonschlinkert/right-pad-keys>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var pad = require('./');

describe('right pad keys', function () {
  describe('object:', function () {
    it('should right-pad the keys of an object:', function () {
      pad({aaa: 'b', ccccc: 'dddddd', e: 'fff', gggggg: 'hhhhh'}).should.eql({
        'aaa   ': 'b',
        'ccccc ': 'dddddd',
        'e     ': 'fff',
        'gggggg': 'hhhhh'
      });

      pad({a: 'x', bbb: 'x', ccccc: 'x', ddddddd: 'x'}).should.eql({
        'a      ': 'x',
        'bbb    ': 'x',
        'ccccc  ': 'x',
        'ddddddd': 'x'
      });
    });
  });

  it('should throw an error when an object is not passed:', function () {
    (function () {
      pad();
    }).should.throw('right-pad-keys expects an object.');
  });
});
