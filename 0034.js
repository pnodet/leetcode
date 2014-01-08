/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
	function binarySearchLeft(nums, target) {
		let index = -1;
		let left = 0;
		let right = nums.length - 1;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);
			if (nums[mid] >= target) right = mid - 1;
			else left = mid + 1;
			if (nums[mid] === target) index = mid;
		}

		return index;
	}

	function binarySearchRight(nums, target) {
		let index = -1;
		let left = 0;
		let right = nums.length - 1;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);
			if (nums[mid] <= target) left = mid + 1;
			else right = mid - 1;
			if (nums[mid] === target) index = mid;
		}

		return index;
	}

	const left = binarySearchLeft(nums, target);
	const right = binarySearchRight(nums, target);

	return [left, right];
}
