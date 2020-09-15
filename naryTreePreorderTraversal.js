/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root)
        return [];
    let children = root.children;
    let result = [];
    result.push(root.val);
    while(children.length) {
        let child = children.shift();
        result.push(child.val);
        if (child.children) {
            let grandChildren = child.children;
            children = grandChildren.concat(children);
        }
    }
    return result;
};