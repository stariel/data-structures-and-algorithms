'use strict';

let BinarySearch = require('./array_binary_search.js');

it('BinarySearch() returns null if it is passed something other than an array and a value', () => {

  expect(BinarySearch('hello', 5)).toEqual(null);
      
});

it('BinarySearch() returns null if it is passed something other than an array and a value', () => {

  expect(BinarySearch([1,2,3])).toEqual(null);
        
});

it('BinarySearch() searches for the index of the element in the array that matches the key and returns the index or -1 if a element matching the key is not present.', () => {

  expect(BinarySearch([4,8,15,16,23,42], 15)).toEqual(2);
            
});

it('BinarySearch() searches for the index of the element in the array that matches the key and returns the index or -1 if a element matching the key is not present.', () => {

  expect(BinarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
              
});

it('BinarySearch() searches for the index of the element in the array that matches the key and returns the index or -1 if a element matching the key is not present.', () => {

  expect(BinarySearch([1,3,4,5,10], 2)).toEqual(-1);
                
});

it('BinarySearch() searches for the index of the element in the array that matches the key and returns the index or -1 if a element matching the key is not present.', () => {

  expect(BinarySearch([1,3,4,5,10], 3)).toEqual(1);
                  
});