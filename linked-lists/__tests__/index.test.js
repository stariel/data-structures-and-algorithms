'use strict';

let LinkedList = require('../index.js');

describe('Linked LinkedList Constructor', () => {
  it('append() creates a new head when there is no head', () => {
    let list = new LinkedList;
    list.append(4);
    expect(list.head.value).toEqual(4);
  });
});

it('append() attaches a new node to the head if there is a head', () => {
  let list = new LinkedList;
  list.append(4);
  list.append(2);
  expect(list.head.next.value).toEqual(2);
});

it('append() creates a new node with a next of null', () => {
  let list = new LinkedList;
  list.append(4);
  list.append(2);
  expect(list.head.next.next).toBe(null);
});

it('prepend() creates a new head when there is no head', () => {
  let list = new LinkedList;
  list.prepend(4);
  expect(list.head.value).toEqual(4);
});

it('prepend() attaches a new node to the head if there is a head', () => {
  let list = new LinkedList;
  list.prepend(4);
  list.prepend(2);
  expect(list.head.value).toEqual(2);
  expect(list.head.next.value).toEqual(4);
});

it('prepend() changes the next of the original head to null', () => {
  let list = new LinkedList;
  list.prepend(4);
  list.prepend(2);
  expect(list.head.next.next).toBe(null);
});

it('reverse() does not modify the list if only one node exists', () => {
  let list = new LinkedList;
  list.prepend(4);
  list.reverse();
  expect(list.head.value).toEqual(4);
});

it('reverse() reverses the order of a linked list with two nodes', () => {
  let list = new LinkedList;
  list.prepend(4);
  list.prepend(2);
  list.reverse();
  expect(list.head.value).toEqual(4);
  expect(list.head.next.value).toEqual(2);
});

it('reverse() reverses the order of a linked list with many nodes', () => {
  let list = new LinkedList;
  list.prepend(4);
  list.prepend(2);
  list.prepend(1);
  list.reverse();
  expect(list.head.value).toEqual(4);
  expect(list.head.next.value).toEqual(2);
  expect(list.head.next.next.value).toEqual(1);
});