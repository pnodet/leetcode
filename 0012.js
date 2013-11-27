const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const SYMBOLS = [
	'M',
	'CM',
	'D',
	'CD',
	'C',
	'XC',
	'L',
	'XL',
	'X',
	'IX',
	'V',
	'IV',
	'I',
];

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
	let roman = '';

	for (let i = 0; i < VALUES.length; i++) {
		while (num >= VALUES[i]) {
			num -= VALUES[i];
			roman += SYMBOLS[i];
		}
	}

	return roman;
}
