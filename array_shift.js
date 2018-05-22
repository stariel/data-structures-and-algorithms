'use strict';

function insertShiftArray(array, value) {
  let arrLength = array.length;
  let centerIndex = Math.ceil(arrLength/2);
  let newArr = [];
  if ((typeof array !== 'object') || (typeof value == 'undefined')) {
    return null;
  }
  else {
    for (let i = 0; i < centerIndex; i++) {
      newArr[i] = array[i];
    }
    newArr[centerIndex] = value;
    for (let j = (centerIndex); j < (array.length); j++) {
      newArr[j+1] = array[j];
    }
    return newArr;
  }
}

module.exports = insertShiftArray;