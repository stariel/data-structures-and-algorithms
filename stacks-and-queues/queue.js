'use strict';

class Queue {
  constructor() {
    this.queue = new Array;
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    return this.queue.shift();
  }
}

export default Queue;