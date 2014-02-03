/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
	let count = 0;

	function solve(row, diagonals, antiDiagonals, cols) {
		if (row === n) {
			count++;
			return;
		}
		for (let col = 0; col < n; col++) {
			let diag = row - col;
			let antiDiag = row + col;
			if (cols.has(col) || diagonals.has(diag) || antiDiagonals.has(antiDiag)) {
				continue;
			}
			cols.add(col);
			diagonals.add(diag);
			antiDiagonals.add(antiDiag);
			solve(row + 1, diagonals, antiDiagonals, cols);
			cols.delete(col);
			diagonals.delete(diag);
			antiDiagonals.delete(antiDiag);
		}
	}

	solve(0, new Set(), new Set(), new Set());
	return count;
}
