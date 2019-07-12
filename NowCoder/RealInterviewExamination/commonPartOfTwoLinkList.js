/*
 * @Author: SkylineBin 
 * @Date: 2019-05-13 09:26:26 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-12 15:29:01
 */


/******
 * 
 * 打印两个有序链表的公共部分
 * 
 * 
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function commonPartOfTwoLinkList(pHead1, pHead2){
    let commonNodes = [];
    if (pHead1 === null || pHead2 === null) {
        return commonNodes;
    }

    while (pHead1 !== null && pHead2 !== null) {
        if (pHead1.val < pHead2.val) {
            pHead1 = pHead1.next;
        } else if (pHead1.val > pHead2.val) {
            pHead2 = pHead2.next;
        } else {
            commonNodes.push(pHead1.val);
            pHead1 = pHead1.next;
            pHead2 = pHead2.next;
        }
    }

    return commonNodes;

}