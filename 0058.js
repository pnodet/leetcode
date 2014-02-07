/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
	let length = 0;
	let tail = s.length - 1;

	while (tail >= 0 && s[tail] === ' ') tail--;

	while (tail >= 0 && s[tail] !== ' ') {
		length++;
		tail--;
	}

	return length;
}
