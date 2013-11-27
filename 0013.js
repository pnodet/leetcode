const MAP = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
	let result = 0;

	for (let i = 0; i < s.length; i++) {
		const val = MAP[s[i]];
		const nextVal = MAP[s[i + 1]] || 0;

		if (val < nextVal) {
			result += nextVal - val;
			i++;
		} else {
			result += val;
		}
	}

	return result;
}
