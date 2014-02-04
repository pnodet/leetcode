/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
	let currentSubarray = nums[0];
	let maxSubarray = nums[0];

	for (let i = 1; i < nums.length; i++) {
		currentSubarray = Math.max(nums[i], currentSubarray + nums[i]);
		maxSubarray = Math.max(maxSubarray, currentSubarray);
	}

	return maxSubarray;
}
