const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootLink = null
		this.size = 0
	}

	root() {
		return this.rootLink
	}

	add(data) {
		const newNode = new Node(data)

		if (this.rootLink === null) {
			this.rootLink = newNode
				++this.size
			return
		}

		let current = this.rootLink
		let left = this.rootLink.left
		let right = this.rootLink.right
		let parent = current

		while (current !== null) {
			parent = current

			left = current.left
			right = current.right

			current = data < current.data ? left : right
		}

		if (data > parent.data) parent.right = newNode
		else parent.left = newNode

		newNode.parent = parent

			++this.size
	}


	has(data) {
		if (this.rootLink === null) return false

		let current = this.rootLink

		let left = this.rootLink.left
		let right = this.rootLink.right

		while (current !== null) {
			console.log(current, data)
			left = current.left
			right = current.right

			if (data === current.data) return true

			current = data > current.data ? right : left
		}

		return false
	}

	find(data) {
		let current = this.rootLink

		while (current !== null) {
			const left = current.left
			const right = current.right

			if (data === current.data) break

			current = data > current.data ? right : left
		}

		return current
	}

	getMaximumValueFrom(start) {
		let response = start

		while (response.right !== null) response = response.right

		return response;
	}

	removeByPointer(target) {
		if (target.left !== null && target.right != null) {
			let localMax = this.getMaximumValueFrom(target.left)
			target.data = localMax.data
			this.removeByPointer(localMax) // maximum 1 call
		} else if (target.left !== null) {
			(target === target.parent.left) ? (target.parent.left = target.left) : (target.parent.right = target.left)
		} else if (target.right !== null) {
			(target === target.parent.right) ? (target.parent.right = target.right) : (target.parent.left = target.right)
		} else { // is it root (in that case it is the only left)
			if (target === this.rootLink)
				target = this.rootLink = null
			else
				(target === target.parent.left) ? (target.parent.left = null) : (target.parent.right = null)
		}
	}

	remove(data) {
		const searchElement = this.find(data)

		if (searchElement !== null) {
			this.removeByPointer(searchElement)
				--this.size
		}


		if (this.size === 0) this.rootLink = null
	}

	min() {
		if (this.rootLink === null) return null

		let current = this.rootLink

		while (current.left !== null) current = current.left

		return current.data
	}

	max() {
		if (this.rootLink === null) return null

		let current = this.rootLink

		while (current !== null && current.right !== null) current = current.right

		return current.data
	}

	recursiveInOrderTraverse(currentNode) {
		currentNode.left !== null && this.recursiveInOrderTraverse(currentNode.left)
		console.log(currentNode.data)
		currentNode.right !== null && this.recursiveInOrderTraverse(currentNode.right)
	}

	print() {
		this.rootLink !== null && this.recursiveInOrderTraverse(this.rootLink)
	}
}

module.exports = {
	BinarySearchTree
};