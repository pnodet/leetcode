/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
	let before = new ListNode(0);
	let after = new ListNode(0);

	let beforeHead = before;
	let afterHead = after;

	while (head) {
		if (head.val < x) {
			before.next = head;
			before = before.next;
		} else {
			after.next = head;
			after = after.next;
		}
		head = head.next;
	}

	after.next = null;
	before.next = afterHead.next;

	return beforeHead.next;
}
