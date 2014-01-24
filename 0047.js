/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
	let results = [];
	nums.sort((a, b) => a - b);

	function backtrack(path, options) {
		if (path.length === nums.length) {
			results.push(Array.from(path));
			return;
		}

		for (let i = 0; i < options.length; i++) {
			if (i > 0 && options[i] === options[i - 1]) continue;
			path.push(options[i]);
			backtrack(path, options.slice(0, i).concat(options.slice(i + 1)));
			path.pop();
		}
	}

	backtrack([], nums);
	return results;
}
