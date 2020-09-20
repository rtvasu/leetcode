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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root)
        return [];
    if (!root.left && !root.right)
        return [root.val];
    let stack = [];
    let resultQueue = [];
    stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        resultQueue.unshift(node.val);
        if (node.left)
            stack.push(node.left)
        if (node.right)
            stack.push(node.right);
    }
    return resultQueue;
};