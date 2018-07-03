let Stack = require('../stack.js');

describe('Stack', () => {

  it('push() does not add an empty value', () => {
    let stack = new Stack;
    stack.push();
    expect(stack).toEqual({"stack": []});
  });

  it('push() adds a value to a new stack', () => {
    let stack = new Stack;
    stack.push(4);
    expect(stack).toEqual({"stack": [4]});
  });

  it('push() adds a value to the end of the stack', () => {
    let stack = new Stack;
    stack.push(4);
    stack.push('bob');
    expect(stack).toEqual({"stack": [4, "bob"]});
  });

  it('pop() returns the last value from the stack', () => {
    let stack = new Stack;
    stack.push(4);
    stack.push('bob');
    expect(stack.pop()).toBe('bob');
  });

  it('pop() removes the last value from the stack', () => {
    let stack = new Stack;
    stack.push(4);
    stack.push('bob');
    stack.pop();
    expect(stack).toEqual({"stack": [4]});
  });

  it('pop() returns undefined from an empty stack', () => {
    let stack = new Stack;
    expect(stack.pop()).toBe(undefined);
  });

  xit('serialize() converts a stack to a formatted string', () => {
    let stack = new Stack;
    stack.push(4);
    expect(stack.serialize()).toBe('[4,]');
  });

});