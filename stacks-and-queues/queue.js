'use strict';

class Queue {
  constructor() {
    this.queue = new Array;
  }

  enqueue(val) {
    //this function has O(1)
    if (val) {
      this.queue.push(val);
    }
  }

  dequeue() {
    //this function has O(1)
    return this.queue.shift();
  }

//   serialize() {
//     //this function has O(n)
//     let queueText = '[';
//     for (let i = 0; i < this.queue.length; i++) {
//       queueText += this.queue[i] + ', ';
//     }
//     queueText += ']';
//     return queueText;
//   }
}

module.exports = Queue;