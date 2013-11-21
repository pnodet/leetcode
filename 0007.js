/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
	const limit = 2_147_483_648; // 2^31
	const sign = x < 0 ? -1 : 1;
	const num = parseInt(String(Math.abs(x)).split('').reverse().join('')) * sign;

	// Check for 32-bit integer overflow.
	if (num < -limit || num > limit - 1) return 0;
	return num;
}
