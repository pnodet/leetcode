/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
	if (left === right) return head;

	let currentPos = 1;
	let currentNode = head;
	let start = head;

	while (currentPos < left) {
		start = currentNode;
		currentNode = currentNode.next;
		currentPos++;
	}

	let newList = null;
	let tail = currentNode;

	while (currentPos >= left && currentPos <= right) {
		const next = currentNode.next;
		currentNode.next = newList;
		newList = currentNode;
		currentNode = next;
		currentPos++;
	}

	start.next = newList;
	tail.next = currentNode;

	return left > 1 ? head : newList;
}
