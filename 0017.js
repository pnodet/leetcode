const MAP = {
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
	if (!digits.length) return [];

	const result = [];

	function backtrack(combination, nextDigits) {
		if (!nextDigits.length) {
			result.push(combination);
		} else {
			let letters = MAP[nextDigits[0]];
			for (let i = 0; i < letters.length; i++) {
				backtrack(combination + letters[i], nextDigits.substring(1));
			}
		}
	}

	backtrack('', digits);
	return result;
}
