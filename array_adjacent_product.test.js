'use strict';

let LargestProduct = require('./array_adjacent_product.js');

it('LargestProduct() returns null if it is passed something other than an array', () => {

  expect(LargestProduct('hello', 5)).toEqual(null);
      
});

it('LargestProduct() returns the product of two adjacent values', () => {
  let input = [1,2];
  let actual = LargestProduct(input);

  expect(actual).toBe(2);
        
});

it('LargestProduct() returns the product of two adjacent values in a 2D array', () => {
  let input = [[1,1],[2,1]];
  let actual = LargestProduct(input);
  
  expect(actual).toBe(2);
          
});

it('LargestProduct() returns the product of two adjacent values in a 2D array', () => {
  let input = [[1,2,3],[4,5,6]];
  let actual = LargestProduct(input);
    
  expect(actual).toBe(30);
            
});

it('LargestProduct() returns the product of two adjacent values in a 2D array', () => {
  let input = [[1,2,1],[2,4,2],[3,6,8],[7,8,1]];
  let actual = LargestProduct(input);
      
  expect(actual).toBe(64);
              
});