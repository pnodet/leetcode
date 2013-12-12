/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
	if (needle === '') return 0;
	const n = haystack.length;
	const m = needle.length;

	for (let i = 0; i <= n - m; i++) {
		let j;
		for (j = 0; j < m; j++) if (haystack[i + j] !== needle[j]) break;
		if (j === m) return i;
	}

	return -1;
}
