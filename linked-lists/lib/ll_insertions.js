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

  insertBefore(val, newVal) {
    if (!this.head) {
      throw console.error('This list does not contain any values.');
    }
    else if (this.head.value == val) {
      let save = this.head;
      this.head = new Node(newVal);
      this.head.next = save;
    } else if (this.head.next !== null) {
      let current = this.head.next;
      let previous = this.head;
      while (current.next !== null) {
        if(current.value == val) {
          let saved = current;
          let newNode = new Node(newVal);
          previous.next = newNode;
          newNode.next = saved;
        }
        previous = current;
        current = current.next;
      }
      throw console.error('This list does not contain the given value.');
    }

  }

  insertAfter(val, newVal) {
    if (!this.head) {
      throw console.error('This list does not contain any values.');
    }
  }

}

module.exports = LinkedList;