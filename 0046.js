/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
	let list = [];

	if (nums.length === 1) return [nums.slice()];

	for (let i = 0; i < nums.length; i++) {
		const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
		const remainingNumsPermuted = permute(remainingNums);
		for (let j = 0; j < remainingNumsPermuted.length; j++) {
			list.push([nums[i]].concat(remainingNumsPermuted[j]));
		}
	}

	return list;
}
