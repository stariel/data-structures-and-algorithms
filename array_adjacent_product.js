'use strict';

function LargestProduct(array) {
  let result = 0;
  let current = 0;
  let len = array.length;
  let len2 = array[0].length;
  if (typeof array !== 'object') {
    return null;
  }
  else if (len2 == undefined) {
    for (let i = 0; i < array.length; i++) {
      current = array[i] * array[(i+1)];
      if (current > result) {
        result = current;
      }
    }
  }
  else {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len2; j++) {
        if (j < (len2-1)) {
          current = array[i][j] * array[(i)][(j+1)];
          if (current > result) {
            result = current;
          }
        }
        if (i < (len-1)) {
          current = array[i][j] * array[(i+1)][j];
          if (current > result) {
            result = current;
          }
          current = array[i][j] * array[(i+1)][(j+1)];
          if (current > result) {
            result = current;
          }
          if (j !== 0) {
            current = array[i][j] * array[(i+1)][(j-1)];
            if (current > result) {
              result = current;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = LargestProduct;