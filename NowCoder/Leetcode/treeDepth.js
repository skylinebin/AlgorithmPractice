/****
 * 
 * 已知一个二叉树，求二叉树的深度
 * 输入一棵二叉树， 求该树的深度。 从根结点到叶结点依次经过的结点（ 含根、 叶结点） 形成树的一条路径， 最长路径的长度为树的深度。
 * 
 */


// 递归解法

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
    // write code here
    if (pRoot !== null) {
        return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right))+1;
    } else {
        return 0;
    }
}

// 非递归解法
// 层次遍历法

function TreeDepth(pRoot) {
    if (pRoot === null) {
        return 0;
    }
    let treearr = [];
    treearr.push(pRoot);
    let depth = 0;
    while(treearr.length !== 0) {
        depth++;
        for (let i = 0; i < treearr.length; i++) {
            let tempNode = treearr[0];
            treearr = treearr.slice(1);
            if (tempNode.left !== null) {
                treearr.push(tempNode.left);
            }
            if (tempNode.right !== null) {
                treearr.push(tempNode.right);
            }
        }
    }
    return depth;
}