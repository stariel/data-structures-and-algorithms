'use strict';

let LinkedList = require('../index.js');

class KLinkedList extends LinkedList {
  constructor() {
    super();
  }

  kthFromEnd(k) {
    let answer = this.head;
    let finder = this.head.next;
    for (let i = 0; i < k; i++) {
      if (finder == null) {
        return undefined;
      }     
      finder = finder.next;
    }
    while (finder !== null) {
      finder = finder.next;
      answer = answer.next;
    }
    return answer.value;
  }

}

module.exports = KLinkedList;