/****
 * 
 * 判断一个树是否是平衡二叉树
 * 输入一棵二叉树， 判断该二叉树是否是平衡二叉树。
 * 
 */


/* function TreeNode(x) {
this.val = x;
this.left = null;
this.right = null;
} */
function IsBalanced_Solution(pRoot) {
    // write code here
    if (pRoot === null) {
        return true;
    }

    // 获取深度的子函数，获取深度的过程中对同一个子节点进行判断
    // 如果有一个子节点左右节点深度不一样都会返回 -1 
    this.getDepth = function (rootNode){
        if (rootNode === null) {
            return 0;
        }
        // 只要有一个等于 -1 ，整个树就不是平衡二叉树
        let left = this.getDepth(rootNode.left);
        if (left === -1) {
            return -1;
        }
        let right = this.getDepth(rootNode.right);
        if (right === -1) {
            return -1;
        }
        return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
    }

    return this.getDepth(pRoot) !== -1;
}