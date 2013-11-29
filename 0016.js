/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
	nums.sort((a, b) => a - b);
	let closestSum = Infinity;

	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const currentSum = nums[i] + nums[left] + nums[right];
			if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
				closestSum = currentSum;
			}
			if (currentSum > target) {
				right--;
			} else {
				left++;
			}
		}
	}

	return closestSum;
}
