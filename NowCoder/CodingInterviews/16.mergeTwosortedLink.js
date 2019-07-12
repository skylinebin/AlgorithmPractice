/*******
 * 
 * 合并两有序的链表
 * 
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 * 
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    if (pHead1 === null && pHead2 === null) {
        return null;
    }
    if (pHead1 !== null && pHead2 === null) {
        return pHead1;
    }
    if (pHead1 === null && pHead2 !== null) {
        return pHead2;
    }

    var outputLink;
    
    if (pHead1.val <= pHead2.val){
        outputLink = new ListNode(pHead1.val);
        pHead1 = pHead1.next;
    }else {
        outputLink = new ListNode(pHead2.val);
        pHead2 = pHead2.next;
    }
    while (pHead1 !==null || pHead2 !== null){
        var tempLink;
        tempLink = outputLink;
        while (tempLink.next !== null) {
            tempLink = tempLink.next;
        }
        if (pHead1 === null) {
            tempLink.next = pHead2;
            break;
        }
        if (pHead2 === null) {
            tempLink.next = pHead1;
            break;
        }
        if (pHead1.val <= pHead2.val){
            tempLink.next = new ListNode(pHead1.val);
            pHead1 = pHead1.next;
        }else {
            tempLink.next = new ListNode(pHead2.val);
            pHead2 = pHead2.next;
        }

    }
    return outputLink;
}


// 递归版本的做法  
function Merge2(pHead1, pHead2){
    if(pHead1 === null){
        return pHead2;
    }
    if(pHead2 === null){
        return pHead1;
    }
    if(pHead1.val <= pHead2.val){
        pHead1.next = Merge2(pHead1.next,pHead2);
        return pHead1;
    }else {
        pHead2.next = Merge2(pHead1,pHead2.next);
        return pHead2;
    }
}