/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
	let result = '';
	let carry = 0;
	let i = a.length - 1;
	let j = b.length - 1;

	while (i >= 0 || j >= 0 || carry === 1) {
		carry += i >= 0 ? parseInt(a[i--], 10) : 0;
		carry += j >= 0 ? parseInt(b[j--], 10) : 0;
		result = (carry % 2) + result;
		carry = Math.floor(carry / 2);
	}

	return result;
}
