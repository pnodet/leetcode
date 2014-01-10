/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
	const rows = {};
	const columns = {};
	const boxes = {};

	for (let i = 0; i < 9; i++) {
		rows[i] = {};
		columns[i] = {};
		boxes[i] = {};
	}

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[i][j];
			if (num !== '.') {
				const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

				if (rows[i][num] || columns[j][num] || boxes[boxIndex][num]) {
					return false;
				}

				rows[i][num] = true;
				columns[j][num] = true;
				boxes[boxIndex][num] = true;
			}
		}
	}

	return true;
}
