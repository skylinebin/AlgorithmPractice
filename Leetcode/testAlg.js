/****
 * 
 * 此方法用于函数测试
 * 
 * 
 */

const arrayToTreeNode = require('./tools/treeNode');
// const arrayToLinkNode = require('./tools/LinkNode');
// const linkToArray = require('./tools/LinkNodetoArray');

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

// function IsBalanced_Solution(pRoot) {
//     // write code here
//     if (pRoot === null) {
//         return true;
//     }

//     this.getDepth = function (rootNode) {
//         if (rootNode === null) {
//             return 0;
//         }
//         let left = this.getDepth(rootNode.left);
//         if (left === -1) {
//             return -1;
//         }
//         let right = this.getDepth(rootNode.right);
//         if (right === -1) {
//             return -1;
//         }
//         return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
//     }

//     return this.getDepth(pRoot) !== -1;
// }

// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }
// function HasSubtree(pRoot1, pRoot2)
// {
//     // write code here
//     if(pRoot1 === null || pRoot2 === null){
//         return false;
//     }
//     var tempState = false;

//     this.checkIfhastree2 = function(tree1, tree2){
//         if (tree2 === null) {
//             return true;
//         } 
//         if (tree1 === null) {
//             return false;
//         }

//         if (tree1.val !== tree2.val ) {
//             return false;
//         }
//         return this.checkIfhastree2(tree1.left, tree2.left) && this.checkIfhastree2(tree1.right, tree2.right);
//     }

//     if (pRoot1.val === pRoot2.val) {
//         tempState = this.checkIfhastree2(pRoot1, pRoot2);
//     }
//     if (!tempState) {
//         tempState = HasSubtree(pRoot1.left, pRoot2);
//     }
//     if (!tempState) {
//         tempState = HasSubtree(pRoot1.right, pRoot2);
//     }
//     return tempState;
// }

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 考虑使用层次遍历法

function PrintFromTopToBottom(root) {
    // write code here
    if (root === null) {
        return [];
    }
    let tempList = [];
    let outprint = [];
    tempList.push(root);
    while (tempList.length !== 0) {
        let tempNode = tempList[0];
        outprint.push(tempNode.val);
        tempList = tempList.slice(1);
        if (tempNode.left !== null) {
            tempList.push(tempNode.left);
        }
        if (tempNode.right !== null) {
            tempList.push(tempNode.right);
        }
    }
    return outprint;

}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5];

var tempLink1 = arrayToTreeNode(arr1);
var tempLink2 = arrayToTreeNode(arr2);
console.log(tempLink1);
console.log(tempLink2);
var list1 = PrintFromTopToBottom(tempLink1);
console.log(list1);
var list2 = PrintFromTopToBottom(tempLink2);
console.log(list2);



// console.log('递归版本是否平衡二叉树：', IsBalanced_Solution(tempTree));
// console.log('非递归版本深度：', treeDep(tempTree));