'use strict';

class Stack {
  constructor() {
    this.stack = new Array;
  }

  push(val) {
    // this function has an O(1)
    this.stack.push(val);
  }
  
  pop() {
    return this.stack.pop();
  }
}

export default Stack;