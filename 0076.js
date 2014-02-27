/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
	const freq = {};
	for (let char of t) {
		if (freq[char] == null) freq[char] = 0;
		freq[char]++;
	}

	let start = 0;
	let end = 0;
	let minLen = Infinity;
	let minStart = 0;
	let counter = t.length;

	while (end < s.length) {
		if (freq[s[end]] > 0) counter--;
		freq[s[end]]--;
		end++;

		while (counter === 0) {
			if (end - start < minLen) {
				minLen = end - start;
				minStart = start;
			}

			freq[s[start]]++;
			if (freq[s[start]] > 0) counter++;
			start++;
		}
	}

	if (minLen === Infinity) return '';
	return s.substring(minStart, minStart + minLen);
}
