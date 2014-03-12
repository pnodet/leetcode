/**
 * @param {number} n
 * @return {number[][]}
 */
function grayCode(n) {
	const result = [0];

	for (let i = 0; i < n; i++) {
		const currentLength = result.length;
		const flipBit = 1 << i;
		for (let j = currentLength - 1; j >= 0; j--) {
			result.push(result[j] | flipBit);
		}
	}

	return result;
}
