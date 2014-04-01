const isSame = (lr, rr) => {
  if ((!lr && rr) || (lr && !rr) || (lr && rr && lr.val !== rr.val))
    return false;

  if (lr && rr) return isSame(lr.left, rr.right) && isSame(lr.right, rr.left);

  return true;
};

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
 * @return {boolean}
 */
const isSymmetric = root => {
  if (!root) return true;

  return isSame(root.left, root.right);
};
