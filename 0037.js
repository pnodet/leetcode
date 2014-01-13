/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
	function isValid(board, row, col, char) {
		for (let i = 0; i < 9; i++) {
			if (board[i][col] === char || board[row][i] === char) {
				return false;
			}
			if (
				board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
					3 * Math.floor(col / 3) + (i % 3)
				] === char
			) {
				return false;
			}
		}
		return true;
	}

	function solve() {
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (board[i][j] === '.') {
					for (let char = 1; char <= 9; char++) {
						if (isValid(board, i, j, char.toString())) {
							board[i][j] = char.toString();
							if (solve()) {
								return true;
							} else {
								board[i][j] = '.';
							}
						}
					}
					return false;
				}
			}
		}
		return true;
	}

	solve();
}
