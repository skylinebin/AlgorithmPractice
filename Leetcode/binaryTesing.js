/*
 * @Author: SkylineBin 
 * @Date: 2019-05-17 11:05:01 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-17 11:30:03
 */


const arraytoBinaryTree = require('./tools/arrayToBinaryTree');


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function FindPath(root, expectNumber) {
    let pathArr = [];
    if (root === null) {
        return pathArr;
    }

    // 考虑使用 dfs 完成路径得到搜索
    this.dfs = function (tempRoot, expectNumber, currentNum, currentArr, pathArr) {
        if (tempRoot === null) {
            currentArr = [];
            currentNum = 0;
            return;
        }

        let tempArr = currentArr.slice(0);

        if (currentNum + tempRoot.val === expectNumber && tempRoot.left === null && tempRoot.right === null) {
            tempArr.push(tempRoot.val);
            pathArr.push(tempArr);
            return;
        } else if (currentNum + tempRoot.val < expectNumber) {
            tempArr.push(tempRoot.val);
            currentNum += tempRoot.val;
            if (tempRoot.left !== null) {
                this.dfs(tempRoot.left, expectNumber, currentNum, tempArr, pathArr);
            }
            if (tempRoot.right !== null) {
                this.dfs(tempRoot.right, expectNumber, currentNum, tempArr, pathArr);
            }

        } else {
            tempArr = [];
            currentNum = 0;
            return;
        }
    }
    let currentNode = root;
    let nodeArrays = [];
    nodeArrays.push(currentNode);
    while (nodeArrays.length !== 0) {
        let tempNode = nodeArrays[0];
        nodeArrays = nodeArrays.slice(1);
        if (tempNode.left !== null) {
            nodeArrays.push(tempNode.left);
        }
        if (tempNode.right !== null) {
            nodeArrays.push(tempNode.right);
        }
        this.dfs(tempNode, expectNumber, 0, [], pathArr);
    }

    pathArr.sort((a, b) => {
        return b.length - a.length;
    })

    return pathArr;
}


let arr1 = [1,2,3,4,5,6,7];

let result = arraytoBinaryTree(arr1);
console.log(result);

console.log("------------------------------------------");

let paths = FindPath(result, 6);
console.log(paths);
