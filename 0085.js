/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
	if (matrix.length === 0) return 0;
	let maxArea = 0;
	let dp = Array.from({length: matrix[0].length}, () => 0);

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
		}
		maxArea = Math.max(maxArea, largestRectangleArea(dp));
	}

	function largestRectangleArea(heights) {
		let stack = [-1];
		let maxArea = 0;

		for (let i = 0; i < heights.length; i++) {
			while (
				stack.length > 1 &&
				heights[i] < heights[stack[stack.length - 1]]
			) {
				maxArea = Math.max(
					maxArea,
					heights[stack.pop()] * (i - stack[stack.length - 1] - 1),
				);
			}
			stack.push(i);
		}

		while (stack.length > 1) {
			maxArea = Math.max(
				maxArea,
				heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1),
			);
		}

		return maxArea;
	}

	return maxArea;
}
