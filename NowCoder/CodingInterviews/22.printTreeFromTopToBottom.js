/****
 * 
 * 
 * 从上往下打印出二叉树的每个节点， 同层节点从左至右打印。
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 考虑使用层次遍历法, 将每一层的先压入栈中，用完就抛弃

function PrintFromTopToBottom(root) {
    // write code here
    if (root === null) {
        return [];
    }
    let tempList = [];
    let outprint = [];
    tempList.push(root);
    while(tempList.length !== 0){
        let tempLen = tempList.length;
        for (let i = 0; i < tempLen; i++) {
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
    }
    return outprint;

}

// 简化版本的层次遍历法

function PrintFromTopToBottom2(root) {
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