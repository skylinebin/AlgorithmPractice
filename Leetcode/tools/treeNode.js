/*****
 * 
 * 封装将 数组转换成成二叉树的方法(平衡二叉树)
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function arraytoTreeNode(array){
    if (array.length <= 0) {
        return null;
    }
    if (array.length === 1) {
        return new TreeNode(array[0]);
    }
    
    var mid = parseInt(array.length / 2);
    var node = new TreeNode(array[mid]);
    node.left = arraytoTreeNode(array.slice(0, mid));
    node.right = arraytoTreeNode(array.slice(mid+1));
    return node;
}

// let arr = [1, 2, 3, 4, 5];
// console.log(arraytoTreeNode(arr));

module.exports = arraytoTreeNode;