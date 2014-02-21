/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
	const stack = [];
	const parts = path.split('/');

	for (const part of parts) {
		if (part === '..') {
			if (stack.length) stack.pop();
		} else if (part && part !== '.') stack.push(part);
	}

	return '/' + stack.join('/');
}
