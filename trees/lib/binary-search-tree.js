'use strict';

module.exports = class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    else {
      this.root.add(val);
    }
  }

  find(val) {
    return this.root ? this.root.find(val) : null;
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

  find(val) {
    if (val === this.val) {
      return this;
    }
    else if (val < this.val) {
      return this.left ? this.left.find(val) :null;
    }
    else {
      return this.right ? this.right.find(val) : null;
    }
  }
}