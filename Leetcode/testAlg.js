/****
 * 
 * 此方法用于函数测试
 * 
 * 
 */

const arrayToTreeNode = require('./tools/treeNode');

// function TreeDepth(pRoot) {
//     // write code here
//     if (pRoot !== null) {
//         return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1;
//     } else {
//         return 0;
//     }
// }

// // 非递归解法
// // 层次遍历法

// function treeDep(pRoot) {
//     if (pRoot === null) {
//         return 0;
//     }
//     var treearr = [];
//     treearr.push(pRoot);
//     var count = 0;
//     while (treearr.length !== 0) {
//         count++;
//         let thisLen = treearr.length;
//         for (let i = 0; i < thisLen; i++) {
//             var temp = treearr[0];
//             treearr = treearr.slice(1);
//             if (temp.left !== null) {
//                 treearr.push(temp.left);
//             }
//             if (temp.right !== null) {
//                 treearr.push(temp.right);
//             }
//         }
//     }
//     return count;
// }

function IsBalanced_Solution(pRoot) {
    // write code here
    if (pRoot === null) {
        return true;
    }

    this.getDepth = function (rootNode) {
        if (rootNode === null) {
            return 0;
        }
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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var tempTree = arrayToTreeNode(arr);

console.log('递归版本是否平衡二叉树：', IsBalanced_Solution(tempTree));
// console.log('非递归版本深度：', treeDep(tempTree));