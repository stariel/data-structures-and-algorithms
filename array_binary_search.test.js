'use strict';

let BinarySearch = require('./array_binary_search.js');

it('BinarySearch() returns null if it is passed something other than an array and a value', () => {

  expect(BinarySearch('hello', 5)).toEqual(null);
      
});

it('BinarySearch() returns null if it is passed something other than an array and a value', () => {

  expect(BinarySearch([1,2,3])).toEqual(null);
        
});