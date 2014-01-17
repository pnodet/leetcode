/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
	let left = 0;
	let right = height.length - 1;
	let leftMax = 0;
	let rightMax = 0;
	let trappedWater = 0;

	while (left < right) {
		if (height[left] < height[right]) {
			height[left] >= leftMax
				? (leftMax = height[left])
				: (trappedWater += leftMax - height[left]);
			left++;
		} else {
			height[right] >= rightMax
				? (rightMax = height[right])
				: (trappedWater += rightMax - height[right]);
			right--;
		}
	}

	return trappedWater;
}
