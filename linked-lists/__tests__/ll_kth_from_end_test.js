'use strict';

let KLinkedList = require('../lib/ll_kth_from_end');

describe('KLinkedList Constructor', () => {
  it('kthFromEnd() returns undefined when list is less than k in length', () => {
    let list = new KLinkedList;
    list.append(7);
    expect(list.kthFromEnd(3)).toEqual(undefined);
  });

  it('kthFromEnd() returns the value of the last node when k is 0', () => {
    let list = new KLinkedList;
    list.append(3);
    list.append(7);
    expect(list.kthFromEnd(0)).toEqual(7);
  });

  it('kthFromEnd() returns the value of the last node in a single node list', () => {
    let list = new KLinkedList;
    list.append(7);
    expect(list.kthFromEnd(0)).toEqual(7);
  });

  it('kthFromEnd() returns the value of the 3rd to last node when k is 2', () => {
    let list = new KLinkedList;
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    expect(list.kthFromEnd(2)).toEqual(3);
  });

});