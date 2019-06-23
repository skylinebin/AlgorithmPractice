/*
 * @Author: SkylineBin 
 * @Date: 2019-06-23 15:29:17 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-23 15:30:22
 */


/*****
 * 
 * 从链表末端移除第N个节点
 * 
 * 
 * 
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 快慢结点法
 */
var removeNthFromEnd = function(head, n) {
    let fastNode,slowNode,tempNode, i=1;
    fastNode = head;
    while(i<n && fastNode!==null){
        fastNode = fastNode.next;
        i++; 
    }
    backList = head;
    slowNode = backList;
    while(fastNode.next != null){
        tempNode = slowNode;
        slowNode = slowNode.next;
        fastNode = fastNode.next;
    }
    if(slowNode === head){
        // 判断是否移除的是头结点
        backList = head.next;
    }else{
        tempNode.next = slowNode.next;
    }
    return backList;
};