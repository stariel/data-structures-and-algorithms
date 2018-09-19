let Queue = require('../queue.js');

describe('Queue', () => {

  it('enqueue() does not add an empty value', () => {
    let queue = new Queue;
    queue.enqueue();
    expect(queue).toEqual({"queue": []});
  });

  it('enqueue() adds a value to a new queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue).toEqual({"queue": [1]});
  });

  it('enqueue() adds a value to the end of the queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue('cat');
    expect(queue).toEqual({"queue": [1, "cat"]});
  });

  it('dequeue() returns the first value from the queue', () => {
    let queue = new Queue;
    queue.enqueue(4);
    queue.enqueue('cat');
    expect(queue.dequeue()).toBe(4);
  });

  it('dequeue() removes the first value from the queue', () => {
    let queue = new Queue;
    queue.enqueue(4);
    queue.enqueue('cat');
    queue.dequeue();
    expect(queue).toEqual({"queue": ["cat"]});
  });

  it('dequeue() returns undefined from an empty queue', () => {
    let queue = new Queue;
    expect(queue.dequeue()).toBe(undefined);
  });

});