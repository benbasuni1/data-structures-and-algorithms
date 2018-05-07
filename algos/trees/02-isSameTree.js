/**
 * Check to see if p AND q exist, if they both are non-existent,
 * we have reached the final place of the tree, therefore return true
 *
 * If only one of p OR q does not exist, return false (unbalanced)
 * If p.val !== q.val return false
 *
 * Recursively spawn p && q LEFT and p && q RIGHT
 */

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.right) && isSameTree(p.left, q.right);
}
