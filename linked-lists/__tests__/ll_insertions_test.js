'use strict';

let LinkedList = require('../lib/ll_insertions.js');

describe('Linked LinkedList Constructor', () => {
  it('append() creates a new head when there is no head', () => {
    let list = new LinkedList;
    list.append(4);
    expect(list.head.value).toEqual(4);
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

});