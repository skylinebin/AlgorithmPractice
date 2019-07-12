/***
 * 
 * @author SkylineBin
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

/* 
 * 涉及理论： 链表、循环
 * 普通解法： 遍历
 * 改进方向：
 *
 *
 */