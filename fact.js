/*! fact v0.0.0 - MIT license */
'use strict';

var fact = function (num, check = true) {
  check = check === true;
  if(typeof num !== 'number'){
    return undefined;
  }
  else if(num < 0) {
    return undefined;
  }
  else if(num === 0) {
    return 1;
  }
  else {
    return num * fact(num - 1);
  }
}

if ( typeof module !== 'undefined' ) {
  module.exports = fact;
}