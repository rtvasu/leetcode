/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 && !t2)
        return null;
    if (!t1 || !t2)
        return (t1? t1 : t2);
    
    let left = mergeTrees(t1.left, t2.left);
    let right = mergeTrees(t1.right, t2.right);
    let result = new TreeNode(t1.val + t2.val, left, right);
    
    return result;
};