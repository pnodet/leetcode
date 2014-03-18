/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
	const res = [];

	function backtrack(start, dots, path) {
		if (dots === 4) {
			if (start === s.length) res.push(path.slice(0, -1));
			return;
		}

		for (let i = start; i < s.length; i++) {
			if (i !== start && s[start] === '0') break;
			const num = parseInt(s.substring(start, i + 1));
			if (num > 255) break;
			path += s.substring(start, i + 1) + '.';
			backtrack(i + 1, dots + 1, path);
			path = path.slice(0, -(i - start + 2));
		}
	}

	backtrack(0, 0, '');
	return res;
}
