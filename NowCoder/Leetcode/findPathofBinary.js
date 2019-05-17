/*
 * @Author: SkylineBin 
 * @Date: 2019-05-17 10:26:16 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-17 11:32:57
 */


/*****
 * 
 * 输入一颗二叉树的跟节点和一个整数， 打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中， 数组长度大的数组靠前)
 * 
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 找出所有路径
function FindAllPath(root, expectNumber) {
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

        if (currentNum + tempRoot.val === expectNumber) {
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


// 找出根节点到叶子节点的所有路径
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
