const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null
    this.size = 0
  }

  root() {
    return this.root
  }

  add(data ) {
    const newNode = new Node(data)

    if (this.root === null && this.size === 0) {
      this.root = newNode
      return
    }

    let current = this.root
    let left = this.root.left
    let right = this.root.right
    let parent = current

    while (current !== null) {
      parent = current

      left = current.left
      right = current.right

      current = data < current.value ? left : right
    }

    if (data > parent.value) parent.right = newNode
    else parent.left = newNode

    ++this.size
  }

  has(data) {
    if (this.root === null) return false

    let current = this.root

    let left = this.root.left
    let right = this.root.right

    while (current !== null) {
      left = current.left
      right = current.right

      if (data === current.value) return true

      current = data > current.value ? right : left
    }

    return false
  }

  find( data ) {
    if (this.root === null) return false

    let current = this.root

    let left = this.root.left
    let right = this.root.right

    while (current !== null) {
      left = current.left
      right = current.right

      if (data === current.value) break

      current = data > current.value ? right : left
    }

    return current
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.root === null) return null

    let current = this.root

    while (current.left !== null) current = current.left

    return current.value
  }

  max() {
    if (this.root === null) return null

    let current = this.root

    while (current.right !== null) current = current.right

    return current.value
  }
}

module.exports = {
  BinarySearchTree
};