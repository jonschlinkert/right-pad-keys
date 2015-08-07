/*!
 * right-pad-keys <https://github.com/jonschlinkert/right-pad-keys>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var longest = require('longest');
var repeat = require('repeat-string');

module.exports = function rightPadKeys(obj) {
  if (!isObject(obj)) {
    throw new TypeError('right-pad-keys expects an object.');
  }

  var keys = Object.keys(obj);
  var max = longest(keys).length;
  var res = {};

  var len = keys.length, i = -1;
  while (++i < len) {
    var key = keys[i];
    var prop = key + repeat(' ', max - key.length);
    res[prop] = obj[key];
  }
  return res;
};
