/****
 * 
 * 此方法用于函数测试
 * 
 * 
 */

const arrayToTreeNode = require('./tools/treeNode');

function TreeDepth(pRoot) {
    // write code here
    if (pRoot !== null) {
        return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1;
    } else {
        return 0;
    }
}

// 非递归解法
// 层次遍历法

function treeDep(pRoot) {
    if (pRoot === null) {
        return 0;
    }
    var treearr = [];
    treearr.push(pRoot);
    var count = 0;
    while (treearr.length !== 0) {
        count++;
        for (let i = 0; i < treearr.length; i++) {
            var temp = treearr[0];
            treearr = treearr.slice(1);
            if (temp.left !== null) {
                treearr.push(temp.left);
            }
            if (temp.right !== null) {
                treearr.push(temp.right);
            }
        }
    }
    return count;
}

let arr = [1, 2, 3, 4, 5];

var tempTree = arrayToTreeNode(arr);

console.log('递归版本深度：', TreeDepth(tempTree));
console.log('非递归版本深度：', treeDep(tempTree));