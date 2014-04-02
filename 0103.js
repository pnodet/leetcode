/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
  if (!root) return [];

  const res = [];
  const queue = [root];
  let levelSize;
  let leftToRight = true;

  while (queue.length > 0) {
    levelSize = queue.length;
    const levelVals = [];

    while (levelSize > 0) {
      const currNode = queue.shift();

      if (leftToRight) levelVals.push(currNode.val);
      else levelVals.unshift(currNode.val);

      if (currNode.left) queue.push(currNode.left);

      if (currNode.right) queue.push(currNode.right);
      levelSize = levelSize - 1;
    }

    leftToRight = !leftToRight;
    res.push(levelVals);
  }

  return res;
};
