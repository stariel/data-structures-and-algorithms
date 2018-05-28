'use strict';

let LargestProduct = require('./array_adjacent_product.js');

it('LargestProduct() returns null if it is passed something other than an array', () => {

  expect(LargestProduct('hello', 5)).toEqual(null);
      
});