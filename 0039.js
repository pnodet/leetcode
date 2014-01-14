/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
	const results = [];

	function backtrack(remain, combo, start) {
		if (remain === 0) {
			results.push([...combo]);
			return;
		} else if (remain < 0) return;

		for (let i = start; i < candidates.length; ++i) {
			combo.push(candidates[i]);
			backtrack(remain - candidates[i], combo, i);
			combo.pop();
		}
	}

	backtrack(target, [], 0);
	return results;
}
