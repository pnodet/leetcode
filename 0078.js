/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
	const output = [];

	function backtrack(first, current) {
		if (current.length <= nums.length) output.push([...current]);
		for (let i = first; i < nums.length; i++) {
			current.push(nums[i]);
			backtrack(i + 1, current);
			current.pop();
		}
	}

	backtrack(0, []);
	return output;
}
