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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root == null)
        return null;
    if (root.val === val)
        return root;
    else {
        if (root.left != null)
           var left = searchBST(root.left, val);
        if(root.right != null)
            var right = searchBST(root.right, val);
        if (!left && !right)
            return null;
        else
            return (left ? left : right);
    }
};