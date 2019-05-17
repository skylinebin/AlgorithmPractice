/*
 * @Author: SkylineBin 
 * @Date: 2019-05-17 11:05:01 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-17 14:37:43
 */


const arraytoBinaryTree = require('./tools/arrayToBinaryTree');


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Serialize(pRoot) {
    // 使用前序遍历的形式访问整个二叉树
    let nodeStr = '';
    if (pRoot === null) {
        return '#!';
    }
    nodeStr += pRoot.val + '!';
    nodeStr += Serialize(pRoot.left);
    nodeStr += Serialize(pRoot.right);
    return nodeStr;
}


function Deserialize(s) {

    let nodeArr = s.split('!');

    this.reConnectTree = function (arrays){
        let tempNode = arrays.shift();
        if (tempNode === '#' || tempNode === '') {
            return null;
        }
        console.log(arrays);
        let head = new TreeNode(parseInt(tempNode));
        head.left = this.reConnectTree(arrays);
        head.right = this.reConnectTree(arrays);
        return head;
    }

    return this.reConnectTree(nodeArr);


}

let arr1 = [8, 6, 10, 5, 7, 9, 11];

let result = arraytoBinaryTree(arr1);
console.log(result);

console.log("------------------------------------------");

let treeStr = Serialize(result);
console.log(treeStr);


let reTree = Deserialize(treeStr);
console.log(reTree);