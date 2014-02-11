/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
	let numbers = [];
	let factorial = [1];
	let result = '';

	for (let i = 1; i <= n; i++) {
		factorial[i] = factorial[i - 1] * i;
		numbers.push(i);
	}

	k--;

	for (let i = 1; i <= n; i++) {
		const index = Math.floor(k / factorial[n - i]);
		result += numbers[index];
		numbers.splice(index, 1);
		k -= index * factorial[n - i];
	}

	return result;
}
