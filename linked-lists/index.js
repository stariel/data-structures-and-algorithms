'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // this function has O(n)
    if (!this.head) {
      this.head = new Node(value);
    }

    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }

  }

  prepend(value) {
    // this function has O(1)
    if (!this.head) {
      this.head = new Node(value);
    }
  
    else {
      let newHead = new Node(value);
      newHead.next = this.head;
      this.head = newHead;
        
    }
  }

  reverse() {
    // this function has O(n)
    let current = this.head;
    let previous = null;
    while (current.next !== null) {
      let neighbor = current.next;
      current.next = previous;
      previous = current;
      current = neighbor;
    }
    current.next = previous;
    this.head = current;
    
  }
}

module.exports = LinkedList;