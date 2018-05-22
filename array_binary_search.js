'use strict';

function BinarySearch(array, key) {
  if ((typeof array !== 'object') || (typeof key !== 'number')) {
    return null;
  }
  else {
    let upperBound = array.length;
    let lowerBound = 0;
    let currentIndex = Math.floor(array.length/2);
    while (upperBound - lowerBound > 0) {
      if (array[currentIndex] > key) {
        upperBound = currentIndex;
        currentIndex = Math.floor((upperBound - lowerBound)/2 + lowerBound);
        if (currentIndex === upperBound) {
          return -1;
        }
        else if (array[currentIndex] < key) {
          lowerBound = currentIndex;
          currentIndex = Math.floor((upperBound - lowerBound)/2 + lowerBound);
          if (currentIndex === lowerBound) {
            return -1;
          }
        }
        else if (array[currentIndex] == key) {
          return currentIndex;
        }
      }
    }
  }
}

module.exports = BinarySearch;