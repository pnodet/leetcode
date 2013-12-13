/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
	if (dividend === -(2 ** 31) && divisor === -1) {
		return 2 ** 31 - 1;
	}

	const sign = dividend > 0 === divisor > 0 ? 1 : -1;

	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);

	let quotient = 0;
	let sum = divisor;

	while (dividend >= divisor) {
		let multiple = 1;
		sum = divisor;

		while (sum <= dividend >> 1) {
			sum = sum << 1;
			multiple = multiple << 1;
		}

		dividend -= sum;
		quotient += multiple;
	}

	return sign * quotient;
}
