/******
 * 
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
 * 返回结果为复制后复杂链表的head。
 * 
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 * 
 * 
 * 
 */

function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    if (pHead === null) {
        return null;
    }

    let copyList = new RandomListNode(pHead.label);
    let randomArr = []; // 使用数组存 random 项
    let current = pHead;
    let currentCopy = copyList;
    randomArr.push(pHead.random);

    while (current){
        let tempNode = current.next;
        let currNode;
        if (tempNode !== null) {
            currNode = copyList;
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = new RandomListNode(tempNode.label);
            randomArr.push(tempNode.random);
        }
        current = tempNode;
    }

    let i = 0;
    while (currentCopy){
        if (randomArr[i] !== null) {
            currentCopy.random = randomArr[i];
        }
        i++;
        currentCopy = currentCopy.next;
    }

    return copyList;
    
}