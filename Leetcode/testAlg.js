/****
 * 
 * 此方法用于函数测试
 * 
 * 
 */

// const arrayToTreeNode = require('./tools/treeNode');
const arrayToLinkNode = require('./tools/LinkNode');
const linkToArray = require('./tools/LinkNodetoArray');

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

function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    if (pHead1 === null && pHead2 === null) {
        return null;
    }
    if (pHead1 !== null && pHead2 === null) {
        return pHead1;
    }
    if (pHead1 === null && pHead2 !== null) {
        return pHead2;
    }

    var outputLink;
    
    if (pHead1.val <= pHead2.val){
        outputLink = new ListNode(pHead1.val);
        pHead1 = pHead1.next;
    }else {
        outputLink = new ListNode(pHead2.val);
        pHead2 = pHead2.next;
    }
    while (pHead1 !==null || pHead2 !== null){
        var tempLink;
        tempLink = outputLink;
        while (tempLink.next !== null) {
            tempLink = tempLink.next;
        }
        if (pHead1 === null) {
            tempLink.next = pHead2;
            break;
        }
        if (pHead2 === null) {
            tempLink.next = pHead1;
            break;
        }
        if (pHead1.val <= pHead2.val){
            tempLink.next = new ListNode(pHead1.val);
            pHead1 = pHead1.next;
        }else {
            tempLink.next = new ListNode(pHead2.val);
            pHead2 = pHead2.next;
        }

    }
    return outputLink;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 5, 6, 10, 12, 15];

var tempLink1 = arrayToLinkNode(arr1);
var tempLink2 = arrayToLinkNode(arr2);
console.log(tempLink1);
console.log(tempLink2);
var mergeLink = Merge(tempLink1, tempLink2);

console.log(mergeLink);

var toArray = linkToArray(mergeLink);

console.log(toArray);

// console.log('递归版本是否平衡二叉树：', IsBalanced_Solution(tempTree));
// console.log('非递归版本深度：', treeDep(tempTree));