/****
 * 
 * 
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
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
    let outPrint = [];
    if (pRoot === null){
        return outPrint;
    }
    let oddLine = [];
    let evenLine = [];
    oddLine.push(pRoot);
    let currentOdd = true;

    while(oddLine.length !== 0 || evenLine.length !== 0){
        if (currentOdd){
            let tempArr = [];
            while(oddLine.length !== 0){
                let tempNode = oddLine[0];
                oddLine = oddLine.slice(1);
                if (tempNode !== null) {
                    tempArr.push(tempNode.val);
                    if (tempNode.left !== null){
                        evenLine.push(tempNode.left);
                    }
                    if (tempNode.right !== null){
                        evenLine.push(tempNode.right);
                    }
                }
            }
            if (tempArr.length !== 0){
                outPrint.push(tempArr);
            }
        } else {
            let tempArr = [];
            while(evenLine.length !== 0){
                let tempNode = evenLine[0];
                evenLine = evenLine.slice(1);
                if (tempNode !== null) {
                    tempArr.push(tempNode.val);
                    if (tempNode.left !== null){
                        oddLine.push(tempNode.left);
                    }
                    if (tempNode.right !== null){
                        oddLine.push(tempNode.right);
                    }
                }
            }
            if (tempArr.length !== 0){
                outPrint.push(tempArr);
            }
        }
        currentOdd = !currentOdd;
    }
    return outPrint;
}