'use strict';

module.exports = class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert(val) {

    if (this.root) {
      this.root.add(val);
    }
    else {
      this.root = new Node(val);
      return;
    }
  }
};

class Node {
  constructor (val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
  
  add(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.add(val);
      } else {
        this.left = new Node(val);
      }
    }
    else {
      if (this.right) {
        this.right.add(val);
      } else {
        this.right = new Node(val);
      }
    }
  }
}

