'use strict';

let LinkedList = require('../lib/ll_insertions.js');

describe('Linked LinkedList Constructor', () => {
  it('append() creates a new head when there is no head', () => {
    let list = new LinkedList;
    list.append(7);
    expect(list.head.value).toEqual(7);
  });

  it('append() attaches a new node to the head if there is a head', () => {
    let list = new LinkedList;
    list.append(7);
    list.append(2);
    expect(list.head.next.value).toEqual(2);
  });

  it('append() creates a new node with a next of null', () => {
    let list = new LinkedList;
    list.append(7);
    list.append(2);
    expect(list.head.next.next).toBe(null);
  });

  it('insertBefore() creates a new head when inserting before the head', () => {
    let list = new LinkedList;
    list.append(7);
    list.insertBefore(7,3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(7);
  });

  it('insertBefore() inserts between two nodes', () => {
    let list = new LinkedList;
    list.append(7);
    list.append(2);
    list.insertBefore(2,4);
    expect(list.head.next.value).toEqual(4);
  });

  it('insertBefore() inserts in the middle of a longer list', () => {
    let list = new LinkedList;
    list.append(7);
    list.append(2);
    list.append(5);
    list.insertBefore(5,3);
    expect(list.head.next.next.value).toBe(3);
  });

  it('insertAfter() inserts after the head', () => {
    let list = new LinkedList;
    list.append(7);
    list.insertAfter(7,3);
    expect(list.head.value).toEqual(7);
    expect(list.head.next.value).toEqual(3);
  });

  it('insertAfter() inserts between two nodes', () => {
    let list = new LinkedList;
    list.append(7);
    list.append(2);
    list.insertAfter(7,4);
    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(2);
  });

  it('insertAfter() inserts at the end of the list with a next of null', () => {
    let list = new LinkedList;
    list.append(7);
    list.append(5);
    list.insertAfter(5,3);
    expect(list.head.next.next.value).toBe(3);
    expect(list.head.next.next.next).toBe(null);
  });

});