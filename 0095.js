/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
	if (n === 0) return [];

	function buildTrees(start, end) {
		const allTrees = [];
		if (start > end) {
			allTrees.push(null);
			return allTrees;
		}

		for (let i = start; i <= end; i++) {
			const leftTrees = buildTrees(start, i - 1);
			const rightTrees = buildTrees(i + 1, end);

			for (let left of leftTrees) {
				for (let right of rightTrees) {
					const currentTree = new TreeNode(i);
					currentTree.left = left;
					currentTree.right = right;
					allTrees.push(currentTree);
				}
			}
		}
		return allTrees;
	}

	return buildTrees(1, n);
}
