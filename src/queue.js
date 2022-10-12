const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.data = []
  }

  getUnderlyingList() {
    if (this.data.length === 0) return null

    const root = new ListNode(this.data[0])
    let current = root

    for (let counter = 1; counter < this.data.length; ++counter) {
      const newNode = new ListNode(this.data[counter])
      current.next = newNode
      current = newNode
    }

    return root
  }

  enqueue(value ) {
    this.data.push(value)
  }

  dequeue() {
    return this.data.shift()
  }
}

module.exports = {
  Queue
};
