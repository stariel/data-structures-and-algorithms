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

  serialize() {
    let queueText = '[';
    for (let i = 0; i < this.queue.length; i++) {
      queueText += this.queue[i] + ', ';
    }
    queueText += ']';
    return queueText;
  }
}

export default Queue;