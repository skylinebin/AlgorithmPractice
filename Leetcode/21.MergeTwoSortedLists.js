/*
 * @Author: SkylineBin 
 * @Date: 2019-05-26 11:20:02 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-26 11:28:37
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null || l2 === null){
        return (l1 === null)? l2:l1;
    }
    let listHead;
    if(l1.val < l2.val){
        listHead = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        listHead = new ListNode(l2.val);
        l2 = l2.next;
    }
    let currentNode = listHead;
    while(l1 && l2){
        if(l1.val < l2.val){
            currentNode.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            currentNode.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    
    if(l1!==null){
        currentNode.next = l1;    
    }
    if(l2!==null){
        currentNode.next = l2;    
    }    
    return listHead;  
};