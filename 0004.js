/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
	if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

	const len1 = nums1.length;
	const len2 = nums2.length;
	let minIdx = 0;
	let maxIdx = len1;
	const median = Math.floor((len1 + len2 + 1) / 2);

	while (minIdx <= maxIdx) {
		const pos1 = Math.floor((minIdx + maxIdx) / 2);
		const pos2 = median - pos1;

		if (pos1 < maxIdx && nums2[pos2 - 1] > nums1[pos1]) {
			minIdx = pos1 + 1;
		} else if (pos1 > minIdx && nums1[pos1 - 1] > nums2[pos2]) {
			maxIdx = pos1 - 1;
		} else {
			let maxLeft = 0;

			if (pos1 === 0) maxLeft = nums2[pos2 - 1];
			else if (pos2 === 0) maxLeft = nums1[pos1 - 1];
			else maxLeft = Math.max(nums1[pos1 - 1], nums2[pos2 - 1]);

			if ((len1 + len2) % 2 === 1) return maxLeft;

			let minRight = 0;

			if (pos1 === len1) minRight = nums2[pos2];
			else if (pos2 === len2) minRight = nums1[pos1];
			else minRight = Math.min(nums1[pos1], nums2[pos2]);

			return (maxLeft + minRight) / 2.0;
		}
	}

	return 0;
}
