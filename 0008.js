/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
	const INT_MAX = 2 ** 31 - 1;
	const INT_MIN = -(2 ** 31);
	const trimmedStr = str.trim();
	const reg = /^([-+]?[0-9]+)/;
	const match = trimmedStr.match(reg);

	if (!match) return 0;

	const num = parseInt(match[0]);

	if (num < INT_MIN) return INT_MIN;
	if (num > INT_MAX) return INT_MAX;

	return num;
}
