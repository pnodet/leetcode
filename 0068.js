/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
	const result = [];
	let line = [];
	let lineLength = 0;

	for (const word of words) {
		if (lineLength + word.length + line.length > maxWidth) {
			for (let i = 0; i < maxWidth - lineLength; i++) {
				line[i % (line.length - 1 || 1)] += ' ';
			}
			result.push(line.join(''));
			line = [];
			lineLength = 0;
		}
		line.push(word);
		lineLength += word.length;
	}

	result.push(line.join(' ').padEnd(maxWidth, ' '));
	return result;
}
