/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
	if (!head || k === 0) return head;

	let oldTail = head;
	let n;
	for (n = 1; oldTail.next; n++) oldTail = oldTail.next;
	oldTail.next = head;

	let newTail = head;
	for (let i = 0; i < n - (k % n) - 1; i++) newTail = newTail.next;

	const newHead = newTail.next;
	newTail.next = null;

	return newHead;
}
