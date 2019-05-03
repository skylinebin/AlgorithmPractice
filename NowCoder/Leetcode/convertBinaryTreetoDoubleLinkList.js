/*****
 * 
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 * 
 * 
 */



function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 中序遍历方法的非递归解法

function Convert(pRootOfTree)
{
    if (pRootOfTree === null) {
        return null;
    }
    let stackData = [];
    let currentNode = pRootOfTree;
    let preNode = null;
    let checkFirst = true;

    while (currentNode !== null || stackData.length !== 0) {
        while (currentNode !== null){
            stackData.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = stackData.pop();
        if (checkFirst) {
            pRootOfTree = currentNode;
            preNode = pRootOfTree;
            checkFirst = false;
        } else {
            preNode.right = currentNode;
            currentNode.left = preNode;
            preNode = currentNode;

        }
        currentNode = currentNode.right;
    }
    return pRootOfTree;

}


// 递归解法
function ConvertRecursion(pRootOfTree) {
    if (pRootOfTree === null) {
        return null;
    }
    if (pRootOfTree.left === null && pRootOfTree.right === null) {
        return pRootOfTree;
    }

    // 将左子树构造成双向链表，并返回链表头
    let leftList = ConvertRecursion(pRootOfTree.left);
    let currentNode = leftList;
    // 找到左子树链表最后一个数
    while (currentNode !== null && currentNode.right !== null){
        currentNode = currentNode.right;
    }
    if (leftList !== null) {
        currentNode.right = pRootOfTree;
        pRootOfTree.left = currentNode;
    }

    // 将右子树构造成双向链表并返回链表头
    let rightList = ConvertRecursion(pRootOfTree.right);
    if (rightList !== null) {
        rightList.left = pRootOfTree;
        pRootOfTree.right = rightList;
    }

    return leftList !== null ? leftList:pRootOfTree;
}