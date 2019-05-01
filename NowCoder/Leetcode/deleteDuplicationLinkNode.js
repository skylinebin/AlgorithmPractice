/******
 * 
 * 删除链表中重复的节点
 * 
 * 在一个排序的链表中， 存在重复的结点， 请删除该链表中重复的结点， 重复的结点不保留， 返回链表头指针。 
 * 
 * 例如， 链表1 - > 2 - > 3 - > 3 - > 4 - > 4 - > 5 处理后为 1 - > 2 - > 5
 * 
 * 
 */


function ListNode(x){
this.val = x;
this.next = null;
}
function deleteDuplication(pHead) {
    
    if (pHead === null) {
        return null;
    }
    let backLink = pHead;
    let sameVal = [];
    let current = pHead;

    // 找出链表值重复的节点的值
    while (current.next) {
        let currVal = current.val;
        current = current.next;
        if (currVal == current.val && sameVal.indexOf(currVal) === -1) {
            sameVal.push(currVal);
        }
    }

    // 删除重复数组里的值的链表节点
    let position = 0;
    let backHead;
    while (backLink) {

        let currNode;
        if (sameVal.indexOf(backLink.val) === -1) {
            if (position === 0) {
                backHead = new ListNode(backLink.val);
                currNode = backHead;
                position++;
            } else {
                currNode = backHead;
                while (currNode.next) {
                    currNode = currNode.next;
                }
                currNode.next = new ListNode(backLink.val);
            }
        }
        backLink = backLink.next;
    }
    return backHead;
}