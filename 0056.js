/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
	if (!intervals.length) return [];

	intervals.sort((a, b) => a[0] - b[0]);

	const merged = [intervals[0]];
	for (let i = 1; i < intervals.length; i++) {
		const prev = merged[merged.length - 1];
		const curr = intervals[i];
		if (curr[0] <= prev[1]) prev[1] = Math.max(prev[1], curr[1]);
		else merged.push(curr);
	}
	return merged;
}
