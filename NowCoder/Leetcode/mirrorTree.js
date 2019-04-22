/******
 * 
 * 操作给定的二叉树， 将其变换为源二叉树的镜像。
 * 
 * 
 * 
 */

// 解题思路，递归的经典解法

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Mirror(root) {
    // write code here
    if (root === null) {
        return null;
    }

    this.swap = function(treeNode) {
        let temp = treeNode.left;
        treeNode.left = treeNode.right;
        treeNode.right = temp;
    }
    this.swap(root);

    Mirror(root.left);
    Mirror(root.right);

}