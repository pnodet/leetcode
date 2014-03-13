/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
	nums.sort((a, b) => a - b);
	const results = [];
	const path = [];

	function backtrack(startIndex) {
		results.push([...path]);
		for (let i = startIndex; i < nums.length; i++) {
			if (i > startIndex && nums[i] === nums[i - 1]) continue;
			path.push(nums[i]);
			backtrack(i + 1);
			path.pop();
		}
	}

	backtrack(0);
	return results;
}
