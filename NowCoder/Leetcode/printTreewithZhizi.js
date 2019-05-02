/*******
 * 
 * 请实现一个函数按照之字形打印二叉树，
 * 即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 * 
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot)
{
    let output = [];
    if (pRoot === null){
        return output;
    }
    let oddArr = []; // 奇数行的结点
    let evenArr = []; // 偶数行的结点
    oddArr.push(pRoot);
    let currentlayer = 1;

    while(oddArr.length !== 0 || evenArr.length !== 0){
        if (currentlayer %2 !== 0){
            let tempArr = [];
            while(oddArr.length !== 0){
                // 使用栈的思想先进后出，奇数行压入时先压入的是右侧的，弹出时弹出的是先是左侧的
                let tempNode = oddArr.pop();
                if (tempNode !== null){
                    tempArr.push(tempNode.val);
                    // 奇数层的子节点要压入偶数层
                    if (tempNode.left !== null){
                        evenArr.push(tempNode.left);
                    }
                    if (tempNode.right !== null) {
                        evenArr.push(tempNode.right);
                    }
                }
            }
            if (tempArr.length !== 0){
                output.push(tempArr);
                currentlayer++;
            }
        } else {
            let tempArr = [];
            while(evenArr.length !== 0){
                // 偶数行压入时先压入的是左侧的，弹出时弹出的是先是右侧的
                let tempNode = evenArr.pop();
                if (tempNode !== null){
                    tempArr.push(tempNode.val);
                    // 偶数层的子节点要压入奇数层
                    if (tempNode.right !== null) {
                        oddArr.push(tempNode.right);
                    }
                    if (tempNode.left !== null){
                        oddArr.push(tempNode.left);
                    }
                }
            }
            if (tempArr.length !== 0){
                output.push(tempArr);
                currentlayer++;
            }
        }
    }
    return output;

}