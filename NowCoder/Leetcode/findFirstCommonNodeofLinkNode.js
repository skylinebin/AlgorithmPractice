/*****
 * 
 * 输入两个链表，找出它们的第一个公共结点。
 * 
 * 
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

// 初级解法：暴力解法 把1个链表所有的节点先用数组存起来，然后每个节点与另一个链表进行比较

function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    let current1 = [];

    while(pHead1 !== null) {
        current1.push(pHead1);
        pHead1 = pHead1.next;
    }

    while (pHead2 !== null) {
        for (let i = 0; i < current1.length; i++) {
            if (pHead2 === current1[i]) {
                return pHead2;
            }
        }
        pHead2 = pHead2.next;
    }
    return null;
}