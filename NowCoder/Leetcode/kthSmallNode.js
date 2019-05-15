/*
 * @Author: SkylineBin 
 * @Date: 2019-05-15 19:03:58 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-15 19:40:17
 */


/*****
 * 
 * 给定一棵二叉搜索树， 请找出其中的第k小的结点。 
 * 例如，（ 5， 3， 7， 2， 4， 6， 8） 中， 按结点数值大小顺序第三小结点的值为4。
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 中序遍历存节点到栈中，取第 K个节点

function KthNode(pRoot, k) {
    if (pRoot === null || k === 0) {
        return null;
    }
    let nodeStacks = [];
    this.inOrderTraverseNode = function (node, nodeArr) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, nodeArr);
            nodeArr.push(node);
            this.inOrderTraverseNode(node.right, nodeArr);
        } else {
            return;
        }
    }

    this.inOrderTraverseNode(pRoot, nodeStacks);
    if (nodeStacks.length < k) {
        return null;
    } else {
        return nodeStacks[k - 1];
    }

}

// 非递归的中序遍历解法

function KthNode2(pRoot, k) {
    if (pRoot === null || k === 0) {
        return null;
    }
    let counter = 0;
    let nodeStacks = [];
    let tempNode = pRoot;
    do{
        if (tempNode !== null) {
            nodeStacks.push(tempNode);
            tempNode = tempNode.left;
        } else {
            tempNode = nodeStacks.pop();
            counter++;
            if (counter === k) {
                return tempNode;
            }
            tempNode = tempNode.right;
        }
    }
    while(tempNode!==null || nodeStacks.length !== 0);
    return null;
}