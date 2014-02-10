/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
	const matrix = Array.from({length: n}, () => Array(n).fill(0));
	let num = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startCol = 0;
	let endCol = n - 1;

	while (startRow <= endRow && startCol <= endCol) {
		for (let col = startCol; col <= endCol; col++) {
			matrix[startRow][col] = num++;
		}
		startRow++;

		for (let row = startRow; row <= endRow; row++) {
			matrix[row][endCol] = num++;
		}
		endCol--;

		for (let col = endCol; col >= startCol; col--) {
			matrix[endRow][col] = num++;
		}
		endRow--;

		for (let row = endRow; row >= startRow; row--) {
			matrix[row][startCol] = num++;
		}
		startCol++;
	}

	return matrix;
}
