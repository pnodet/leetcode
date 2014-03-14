/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
	if (s[0] === '0') return 0;

	let prev = 1;
	let curr = 1;

	for (let i = 1; i < s.length; i++) {
		let temp = curr;
		if (s[i] === '0') {
			if (s[i - 1] === '1' || s[i - 1] === '2') {
				curr = prev;
			} else return 0;
		} else if (
			s[i - 1] === '1' ||
			(s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6')
		) {
			curr += prev;
		}
		prev = temp;
	}

	return curr;
}
