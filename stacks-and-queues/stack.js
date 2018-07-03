'use strict';

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    // this function has an O(1)
    if (val) {
      this.stack.push(val);
    }
  }
  
  pop() {
    //this function has O(1)
    return this.stack.pop();
  }

  serialize() {
    //this function has O(n)
    let stackText = '[';
    this.stack.forEach(element => {
      stackText += (element + ', ');
    });
    stackText += ']';
    return stackText;
  }
}

module.exports= Stack;