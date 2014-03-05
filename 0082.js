/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
	if (!head || !head.next) return head;

	let dummy = new ListNode(0);
	dummy.next = head;
	let prev = dummy;

	while (head && head.next) {
		if (head.val === head.next.val) {
			while (head.next && head.val === head.next.val) head = head.next;
			prev.next = head.next;
		} else prev = prev.next;

		head = head.next;
	}

	return dummy.next;
}
