'use strict';

let BinarySearchTree = require('../lib/binary-search-tree.js');

describe('Binary Tree', () => {

  it('insert should create a root', () => {
    let testTree = new BinarySearchTree;
    testTree.insert(4);
    expect(testTree.root.val).toBe(4);
  });

  it('insert should insert a new node to the left', () => {
    let testTree = new BinarySearchTree;
    testTree.insert(4);
    testTree.insert(2);
    expect(testTree.root.left.val).toBe(2);
  });

  it('insert should insert a new node to the right', () => {
    let testTree = new BinarySearchTree;
    testTree.insert(4);
    testTree.insert(2);
    testTree.insert(6);
    testTree.insert(8);
    expect(testTree.root.right.val).toBe(6);
  });


  it('find should find one node', () => {
    let testTree = new BinarySearchTree;
    testTree.insert(4);
    let result = testTree.find(4);
    expect(result.val).toEqual(4);
  });

  it('find should find a  node in a multi node tree', () => {
    let testTree = new BinarySearchTree;
    testTree.insert(5);
    testTree.insert(2);
    testTree.insert(8);
    testTree.insert(7);
    let result = testTree.find(7);
    expect(result.val).toEqual(7);
  });

  it('find should return null if no node is found', () => {
    let testTree = new BinarySearchTree;
    testTree.insert(4);
    testTree.insert(8);
    testTree.insert(5);
    testTree.insert(9);

    expect(testTree.find(2)).toBe(null);
  });
});