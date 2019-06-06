let Queue = require('../../lib/queue_with_stacks.js');

describe('Queue', () => {

  it('enqueue() does not add an empty value', () => {
    let queue = new Queue;
    queue.enqueue();
    expect(queue).toEqual({"inbox": {"stack": []}, "outbox": {"stack": []}});
  });

  it('enqueue() adds a value to a new queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue).toEqual({"inbox": {"stack": []}, "outbox": {"stack": [1]}});
  });

  it('enqueue() adds a value to the end of the queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue('cat');
    expect(queue).toEqual({"inbox": {"stack": []}, "outbox": {"stack": [1, "cat"]}});
  });

  xit('dequeue() returns the first value from the queue', () => {
    let queue = new Queue;
    queue.enqueue(4);
    queue.enqueue('cat');
    expect(queue.dequeue()).toBe(4);
  });

  xit('dequeue() removes the first value from the queue', () => {
    let queue = new Queue;
    queue.enqueue(4);
    queue.enqueue('cat');
    queue.dequeue();
    expect(queue).toEqual({"queue": ["cat"]});
  });

  xit('dequeue() returns undefined from an empty queue', () => {
    let queue = new Queue;
    expect(queue.dequeue()).toBe(undefined);
  });

});