/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
	if (matrix.length === 0) return [];

	const result = [];
	let startRow = 0,
		endRow = matrix.length - 1;
	let startCol = 0,
		endCol = matrix[0].length - 1;

	while (startRow <= endRow && startCol <= endCol) {
		for (let col = startCol; col <= endCol; col++) {
			result.push(matrix[startRow][col]);
		}
		startRow++;

		for (let row = startRow; row <= endRow; row++) {
			result.push(matrix[row][endCol]);
		}
		endCol--;

		if (startRow <= endRow) {
			for (let col = endCol; col >= startCol; col--) {
				result.push(matrix[endRow][col]);
			}
			endRow--;
		}

		if (startCol <= endCol) {
			for (let row = endRow; row >= startRow; row--) {
				result.push(matrix[row][startCol]);
			}
			startCol++;
		}
	}

	return result;
}
