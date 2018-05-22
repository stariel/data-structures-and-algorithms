'use strict';

function reverseArray(arr) {
  const newArray = [];
  for (let i = (arr.length - 1); i >= 0; i--) {
    let val = arr[i];
    newArray.push(val);
  }
  console.log(newArray);
}