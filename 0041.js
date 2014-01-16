/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
	const size = nums.length;

	if (!nums.includes(1)) return 1;

	for (let i = 0; i < size; i++) {
		if (nums[i] <= 0 || nums[i] > size) nums[i] = 1;
	}

	for (let i = 0; i < size; i++) {
		const a = Math.abs(nums[i]);
		if (a === size) nums[0] = -Math.abs(nums[0]);
		else nums[a] = -Math.abs(nums[a]);
	}

	for (let i = 1; i < size; i++) {
		if (nums[i] > 0) return i;
	}

	return nums[0] > 0 ? size : size + 1;
}
