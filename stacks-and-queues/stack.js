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

  serialize() {
    let stackText = '[';
    for (let i = 0; i < this.stack.length; i++) {
      stackText += this.stack[i] + ', ';
    }
    stackText += ']';
    return stackText;
  }
}

export default Stack;