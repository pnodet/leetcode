/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
	if (numRows === 1 || s.length <= numRows) return s;

	const rows = new Array(numRows).fill('');
	let currentRow = 0;
	let step = 0;

	for (const char of s) {
		rows[currentRow] += char;
		if (currentRow === 0) step = 1;
		if (currentRow === numRows - 1) step = -1;
		currentRow += step;
	}

	return rows.join('');
}
