'use strict';

let Stack = require('../stack.js');

describe('Stack', () => {

  it('push() adds a value to a new stack', () => {
    let stack = new Stack;
    stack.push(4);
    expect(stack).toEqual({"stack": [4]});
  });

  it('push() adds a value to the end of the stack', () => {
    let stack = new Stack;
    stack.push(4);
    stack.push('bob');
    expect(stack).toEqual({"stack": [4, 'bob']});
  });

  it('pop() returns the last value from the stack', () => {
    let stack = new Stack;
    stack.push(4);
    stack.push('bob');
    console.log(stack);
    expect(stack.pop()).toBe('bob');
  });

});