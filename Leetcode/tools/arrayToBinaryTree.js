/*
 * @Author: SkylineBin 
 * @Date: 2019-05-17 10:52:43 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-17 11:04:23
 */


/*******
 * 
 * 將数组转换成顺序二叉树
 * 
 * 
*/

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function arraytoBinaryTree(array) {
    if (array.length <= 0) {
        return null;
    }
    if (array.length === 1) {
        return new TreeNode(array[0]);
    }


    let node = new TreeNode(array[0]);
    let nodeArr = [];
    nodeArr.push(node)
    let count = 0;
    while (2 * count + 1 < array.length) {
        if (2 * count + 1 < array.length) {
            nodeArr[2 * count + 1] = new TreeNode(array[2 * count + 1])
            nodeArr[count].left = nodeArr[2 * count + 1];
        } 
        if (2 * count + 2 < array.length) {
            nodeArr[2 * count + 2] = new TreeNode(array[2 * count + 2])
            nodeArr[count].right = nodeArr[2 * count + 2];
        }
        count++;
    }

    return node;
}

// let arr = [1, 2, 3, 4, 5];
// console.log(arraytoTreeNode(arr));

module.exports = arraytoBinaryTree;