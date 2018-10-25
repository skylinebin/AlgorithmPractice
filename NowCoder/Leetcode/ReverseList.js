/***
 * 
 * @author SkylineBin\
 * @time 2018-10-25
 * @function reverse LinkList by JavaScript
 * 
 * 
 * 输入一个链表， 反转链表后， 输出新链表的表头。
 * 
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    var preList;
    var nextList;
    while (pHead != null) {
        nextList = pHead.next;
        pHead.next = preList;
        preList = pHead;
        pHead = nextList;
    }
    return preList;

}