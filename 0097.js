/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  const l = s3.length;

  if (m + n !== l) return false;

  const dp = new Array(n + 1).fill(false);

  dp[0] = true;

  for (let j = 1; j <= n; ++j) {
    dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= m; ++i) {
    dp[0] = dp[0] && s1[i - 1] === s3[i - 1];

    for (let j = 1; j <= n; ++j) {
      dp[j] =
        (dp[j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[n];
}
