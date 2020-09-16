/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums)
        return null;
    
    let maxIndex = findMaxIndex(nums);
    
    let leftSlice = (maxIndex === 0 ? null : nums.slice(0, maxIndex));
    let rightSlice = (maxIndex === nums.length - 1 ? null: nums.slice(maxIndex + 1, nums.length));
    
    let left = constructMaximumBinaryTree(leftSlice);
    let right = constructMaximumBinaryTree(rightSlice);
    
    return new TreeNode(nums[maxIndex], left, right);
};

function findMaxIndex(array) {
    let max = array[0];
    let maxIndex = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}