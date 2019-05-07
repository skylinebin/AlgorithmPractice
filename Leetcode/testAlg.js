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

// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }

// 考虑使用层次遍历法

// function PrintFromTopToBottom(root) {
//     // write code here
//     if (root === null) {
//         return [];
//     }
//     let tempList = [];
//     let outprint = [];
//     tempList.push(root);
//     while (tempList.length !== 0) {
//         let tempNode = tempList[0];
//         outprint.push(tempNode.val);
//         tempList = tempList.slice(1);
//         if (tempNode.left !== null) {
//             tempList.push(tempNode.left);
//         }
//         if (tempNode.right !== null) {
//             tempList.push(tempNode.right);
//         }
//     }
//     return outprint;

// }

// function ListNode(x) {
//     this.val = x;
//     this.next = null;
// }

// function deleteDuplication(pHead) {

//     if (pHead === null) {
//         return null;
//     }
//     let backLink = pHead;
//     let sameVal = [];
//     let current = pHead;

//     // 找出链表值重复的节点的值
//     while (current.next) {
//         let currVal = current.val;
//         current = current.next;
//         if (currVal == current.val && sameVal.indexOf(currVal) === -1) {
//             sameVal.push(currVal);
//         }
//     }

//     // 删除重复数组里的值的链表节点
//     let position = 0;
//     let backHead;
//     while (backLink) {

//         let currNode;
//         if (sameVal.indexOf(backLink.val) === -1) {
//             if (position === 0) {
//                 backHead = new ListNode(backLink.val);
//                 currNode = backHead;
//                 position++;
//             } else {
//                 currNode = backHead;
//                 while (currNode.next) {
//                     currNode = currNode.next;
//                 }
//                 currNode.next = new ListNode(backLink.val);
//             }
//         }
//         backLink = backLink.next;
//     }
//     return backHead;
// }

// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }
// function Print(pRoot)
// {
//     let outPrint = [];
//     if (pRoot === null){
//         return outPrint;
//     }
//     let oddLine = [];
//     let evenLine = [];
//     oddLine.push(pRoot);
//     let currentOdd = true;

//     while(oddLine.length !== 0 || evenLine.length !== 0){
//         if (currentOdd){
//             let tempArr = [];
//             while(oddLine.length !== 0){
//                 let tempNode = oddLine[0];
//                 oddLine = oddLine.slice(1);
//                 if (tempNode !== null) {
//                     tempArr.push(tempNode.val);
//                     if (tempNode.left !== null){
//                         evenLine.push(tempNode.left);
//                     }
//                     if (tempNode.right !== null){
//                         evenLine.push(tempNode.right);
//                     }
//                 }
//             }
//             if (tempArr.length !== 0){
//                 outPrint.push(tempArr);
//             }
//         } else {
//             let tempArr = [];
//             while(evenLine.length !== 0){
//                 let tempNode = evenLine[0];
//                 evenLine = evenLine.slice(1);
//                 if (tempNode !== null) {
//                     tempArr.push(tempNode.val);
//                     if (tempNode.left !== null){
//                         oddLine.push(tempNode.left);
//                     }
//                     if (tempNode.right !== null){
//                         oddLine.push(tempNode.right);
//                     }
//                 }
//             }
//             if (tempArr.length !== 0){
//                 outPrint.push(tempArr);
//             }
//         }
//         currentOdd = !currentOdd;
//     }
//     return outPrint;

// }

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// function isSymmetrical(pRoot)
// {
//     let symmetrical = false;
//     if (pRoot === null) {
//         return symmetrical;
//     }

//     this.compareNode = function(leftNode, rightNode){
//         if (leftNode === null){
//             return rightNode === null;
//         }
//         if (rightNode === null){
//             return false;
//         }
//         if (leftNode.val !== rightNode.val){
//             return false;
//         }
//         return this.compareNode(leftNode.left, rightNode.right) && this.compareNode(leftNode.right, rightNode.left);
//     }

//     return this.compareNode(pRoot.left, pRoot.right);
// }


function Serialize(pRoot) {
    // 使用前序遍历的形式访问整个二叉树
    let nodeStr = '';
    if (pRoot === null) {
        nodeStr += '@,';
        return nodeStr;
    }
    nodeStr += pRoot.val + ',';
    nodeStr += Serialize(pRoot.left);
    nodeStr += Serialize(pRoot.right);
    return nodeStr;
}

let index = -1;

function Deserialize(s) {
    index++;
    if (index >= s.length) {
        return null;
    }
    let nodeArr = s.split(',');
    let treeNode = null;
    if (nodeArr[index] !== '@') {
        treeNode = new TreeNode(nodeArr[index]);
        treeNode.left = Deserialize(s);
        treeNode.right = Deserialize(s);
    }
    return treeNode;
}


// let arr1 = [1, 1, 2, 3, 3, 4, 5];
let arr1 = [5,6,7,8,7,6,5];
let arr2 = [5, 4, "#", 3, "#", 2];

// var tempLink1 = arrayToLinkNode(arr1);
// var tempLink2 = arrayToTreeNode(arr2);
var tempTree = arrayToTreeNode(arr2);
console.log(tempTree);

let result = Serialize(tempTree);
console.log(result);

console.log(Deserialize(result));
// console.log(tempLink2);
// var list1 = linkToArray(tempLink1);
// console.log(list1);
// var list2 = PrintFromTopToBottom(tempLink2);
// console.log(list2);



// console.log('递归版本是否平衡二叉树：', IsBalanced_Solution(tempTree));
// console.log('非递归版本深度：', treeDep(tempTree));