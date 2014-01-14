/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
	if (n === 1) return '1';
	if (n === 2) return '11';

	let str = '11';
	for (let i = 3; i <= n; i++) {
		str += '$';
		let temp = '';
		let count = 1;

		for (let j = 1; j < str.length; j++) {
			if (str[j] !== str[j - 1]) {
				temp += count + str[j - 1];
				count = 1;
			} else {
				count++;
			}
		}

		str = temp;
	}

	return str;
}
