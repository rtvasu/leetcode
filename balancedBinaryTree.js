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
var isBalanced = function(root) {
    if (!root)
        return true;
    function max(ele1, ele2) {
        if (ele1 > ele2)
            return ele1;
        else
            return ele2;
    };
    function heightSubTree (ele) {
        let height = 0;
        if (!ele)
            return height;
        height = max(heightSubTree(ele.left), heightSubTree(ele.right)) + 1;
        return height;
    };
    if ((Math.abs(heightSubTree(root.left) - heightSubTree(root.right)) <= 1) &&
        (isBalanced(root.left) && isBalanced(root.right)))
        return true;
    return false;
};