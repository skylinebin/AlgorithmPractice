/******
 * 
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 * 
 * 
 * 
 */


function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null; // 这是指向父节点的指针，易误解
}
function GetNext(pNode)
{
    if(pNode === null) {
        return null;
    }

    if ( pNode.right !== null){
        let tempNode = pNode.right;
        while(tempNode.left !== null){
            tempNode = tempNode.left;
        }
        return tempNode;
    }

    while(pNode.next !== null){
        let tempParent = pNode.next;
        // 右子树为空时，找到父节点中是左子树的父节点，即为当前结点的下一个结点
        if (tempParent.left === pNode){
            return tempParent;
        }
        pNode = pNode.next;
    }
    return null;
}