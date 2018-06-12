'use strict';

function append(value) {
  if (!this.head) {
    this.head = node(value);
  }
    
  else {
    let current = this.head;
    while (current.next == null) {
      current = current.next;
    }
    current.next = node(value);
  }

}

function insertBefore(value, newVal) {
  if (!this.head) {
    throw console.error('This value does not exist in the list.');
  }

}

function insertAfter(value, newVal) {
  if (!this.head) {
    throw console.error('This value does not exist in the list.');
  }
}