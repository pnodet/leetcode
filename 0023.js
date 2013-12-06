/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
	if (lists.length === 0) return null;

	while (lists.length > 1) {
		let a = lists.shift();
		let b = lists.shift();
		const h = mergeTwoLists(a, b);
		lists.push(h);
	}

	return lists[0];
}

function mergeTwoLists(l1, l2) {
	if (!l1 || !l2) return l1 || l2;
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	}
	l2.next = mergeTwoLists(l1, l2.next);
	return l2;
}
