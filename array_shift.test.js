'use strict';

let insertShiftArray = require('./array_shift.js');

it('insertShiftArray() returns null if it is passed something other than an array and a value', () => {

  expect(insertShiftArray('kitty')).toEqual(null);
      
});