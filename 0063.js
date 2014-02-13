/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
	const m = obstacleGrid.length;
	const n = obstacleGrid[0].length;
	const dp = Array.from({length: m}, () => Array(n).fill(0));

	dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

	for (let i = 1; i < m; i++) {
		dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0;
	}

	for (let j = 1; j < n; j++) {
		dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j - 1] : 0;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (obstacleGrid[i][j] === 0) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
		}
	}

	return dp[m - 1][n - 1];
}
