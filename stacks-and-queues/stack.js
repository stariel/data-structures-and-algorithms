'use strict';

class Stack {
  constructor() {
    this.stack = new Array;
    this.stack.length = 0;
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

  // serialize() {
  //   //this function has O(n)
  //   let stackText = '[';
  //   this.array.forEach(element => {
  //     stackText += (element + ', ');
  //   });
  //   stackText += ']';
  //   return stackText;
  // }
}

module.exports= Stack;