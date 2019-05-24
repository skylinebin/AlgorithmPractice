/****
 * 
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * 
 * 思路解析：判断两棵树是否相等
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 === null || pRoot2 === null){
        return false;
    }
    var tempState = false;

    this.checkIfhastree2 = function(tree1, tree2){
        if (tree2 === null) {
            return true;
        } 
        if (tree1 === null) {
            return false;
        }

        if (tree1.val !== tree2.val ) {
            return false;
        }
        return this.checkIfhastree2(tree1.left, tree2.left) && this.checkIfhastree2(tree1.right, tree2.right);
    }

    if (pRoot1.val === pRoot2.val) {
        tempState = this.checkIfhastree2(pRoot1, pRoot2);
    }
    if (!tempState) {
        tempState = HasSubtree(pRoot1.left, pRoot2);
    }
    if (!tempState) {
        tempState = HasSubtree(pRoot1.right, pRoot2);
    }
    return tempState;
}