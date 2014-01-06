/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
	let wordLength = words[0].length;
	let wordCount = words.length;
	let substringSize = wordLength * wordCount;
	let results = [];

	let wordMap = new Map();
	for (let word of words) {
		wordMap.set(word, (wordMap.get(word) || 0) + 1);
	}

	for (let i = 0; i < s.length - substringSize + 1; i++) {
		let seen = new Map();
		let j = 0;
		while (j < wordCount) {
			let wordIndex = i + j * wordLength;
			let word = s.substring(wordIndex, wordIndex + wordLength);
			if (!wordMap.has(word)) break;

			seen.set(word, (seen.get(word) || 0) + 1);
			if (seen.get(word) > wordMap.get(word)) break;

			j++;
		}
		if (j === wordCount) results.push(i);
	}

	return results;
}
