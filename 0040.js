/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
	const results = [];
	candidates.sort((a, b) => a - b);

	function backtrack(remain, combo, start) {
		if (remain === 0) {
			results.push([...combo]);
			return;
		}

		if (remain < 0) return;

		for (let i = start; i < candidates.length; i++) {
			if (i > start && candidates[i] === candidates[i - 1]) continue;
			combo.push(candidates[i]);
			backtrack(remain - candidates[i], combo, i + 1);
			combo.pop();
		}
	}

	backtrack(target, [], 0);
	return results;
}
