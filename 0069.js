/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
	if (x < 2) return x;

	let left = 1;
	let right = Math.floor(x / 2);
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const num = mid * mid;
		if (num > x) right = mid - 1;
		else if (num < x) left = mid + 1;
		else return mid;
	}

	return right;
}
