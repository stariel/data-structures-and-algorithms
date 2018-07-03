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
    //this function has O(1)
    return this.stack.pop();
  }

  serialize() {
    //this function has O(n)
    let stackText = '[';
    for (let i = 0; i < this.stack.length; i++) {
      stackText += this.stack[i] + ', ';
    }
    stackText += ']';
    return stackText;
  }
}

module.exports= Stack;