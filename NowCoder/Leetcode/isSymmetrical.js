/*****
 * 
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSymmetrical(pRoot)
{
    if (pRoot === null) {
        return true;
    }

    this.compareNode = function(leftNode, rightNode){
        if (leftNode === null){
            return rightNode === null;
        }
        if (rightNode === null){
            return false;
        }
        if (leftNode.val !== rightNode.val){
            return false;
        }
        return this.compareNode(leftNode.left, rightNode.right) && this.compareNode(leftNode.right, rightNode.left);
    }

    return this.compareNode(pRoot.left, pRoot.right);
}


// 非递归写法