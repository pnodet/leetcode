/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
	const memo = new Map();

	function canScramble(L1, R1, L2, R2) {
		if (L1 === R1) return s1[L1] === s2[L2];
		const key = `${L1}-${R1}-${L2}-${R2}`;
		if (memo.has(key)) return memo.get(key);

		if (s1.slice(L1, R1 + 1) === s2.slice(L2, R2 + 1)) {
			memo.set(key, true);
			return true;
		}

		const freq = Array(26).fill(0);
		for (let i = L1; i <= R1; i++) {
			freq[s1.charCodeAt(i) - 97]++;
			freq[s2.charCodeAt(L2 + i - L1) - 97]--;
		}
		if (freq.some(count => count !== 0)) {
			memo.set(key, false);
			return false;
		}

		for (let i = L1; i < R1; i++) {
			if (
				canScramble(L1, i, L2, L2 + i - L1) &&
				canScramble(i + 1, R1, L2 + i - L1 + 1, R2)
			) {
				memo.set(key, true);
				return true;
			}
			if (
				canScramble(L1, i, R2 - (i - L1), R2) &&
				canScramble(i + 1, R1, L2, L2 + R1 - i - 1)
			) {
				memo.set(key, true);
				return true;
			}
		}

		memo.set(key, false);
		return false;
	}

	return canScramble(0, s1.length - 1, 0, s2.length - 1);
}
