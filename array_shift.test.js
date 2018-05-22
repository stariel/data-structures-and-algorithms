'use strict';

let insertShiftArray = require('./array_shift.js');

it('insertShiftArray() returns null if it is passed something other than an array and a value', () => {

  expect(insertShiftArray('kitty', null)).toEqual(null);
      
});

it('insertShiftArray() returns null if it is passed something other than an array and a value', () => {

  expect(insertShiftArray([1,2,3])).toEqual(null);
        
});

it('insertShiftArray() inserts the given value at the center index of the new array and returns it', () => {

  expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
          
});

it('insertShiftArray() inserts the given value at the center index of the new array and returns it', () => {

  expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
            
});