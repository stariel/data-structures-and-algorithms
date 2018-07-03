'use strict';

let Stack = require('../stack.js');

class Queue {
  constructor() {
    this.inbox = new Stack;
    this.outbox = new Stack;
  }

  enqueue(val) {
    if (this.outbox.length == 0) {
      this.outbox.push(val);
    }
    else {
      while (this.outbox.length > 0) {
        this.inbox.push(this.outbox.pop());
      }
      this.outbox.push(val);
    }
  }

  dequeue() {
    return this.queue.shift();
  }

}

module.exports = Queue;