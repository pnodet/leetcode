/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
	const dp = Array(word1.length + 1)
		.fill(null)
		.map(() => Array(word2.length + 1).fill(0));

	for (let i = 0; i <= word1.length; i++) {
		for (let j = 0; j <= word2.length; j++) {
			if (i === 0) dp[i][j] = j;
			else if (j === 0) dp[i][j] = i;
			else if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
			}
		}
	}

	return dp[word1.length][word2.length];
}
