const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

const doesListHaveItem = (list, item) => {
  let current = list

  while (current !== null) {
    if (current.value === item) return true
    current = current.next
  }

  return false
}

const removeSingleItem = (list, item) => {
  let current = list

  if (current === null) return list

  if (current.value === item) return current.next // it's first element

  while (current !== null && current.next !== null) {
    const currentNext = current.next

    if (currentNext !== null) {
      if (currentNext.value === item) {
        current.next = currentNext.next
      }
    }

    current = current.next
  }

  return list
}


function removeKFromList(list, item) {
  if (!doesListHaveItem(list, item)) return list

  let response = list

  while (doesListHaveItem(response, item)) {
    response = removeSingleItem(response, item)
  }

  return response
}

module.exports = {
  removeKFromList
};
