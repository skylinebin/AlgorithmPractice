
/****
 * 
 * 反转链表
 * 
 */
function reverseLinkList(pHead){
    let preList,nextList;
    while(pHead!=null){
        nextList = pHead.next;
        pHead.next = preList;
        preList = pHead;
        pHead = nextList;
    }
    return preList;
}

/****
 * 
 * 合并两个有序链表
 * 
 * 
 */

function mergeLinkLists(pHead1,pHead2){
    if(pHead1==null){
        return pHead2;
    }
    if(pHead2==null){
        return pHead1;
    }
    if(pHead1.val <= pHead2.val){
        pHead1.next = mergeLinkLists(pHead1.next, pHead2);
        return pHead1;
    }else{
        pHead2.next = mergeLinkLists(pHead1,pHead2.next);
        return pHead2;
    }
}