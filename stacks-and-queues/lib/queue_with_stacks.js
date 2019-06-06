'use strict';

let Stack = require('../stack.js');

class Queue {
  constructor() {
    this.inbox = new Stack;
    this.outbox = new Stack;
  }

  enqueue(val) {
    this.outbox.push(val);
  }

//   dequeue() {
//     this.outbox.forEach (ele =>  {
//       this.inbox.push(ele);
//     });
//     this.inbox.pop();
//   }

}

module.exports = Queue;