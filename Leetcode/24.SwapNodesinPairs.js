/*
 * @Author: SkylineBin 
 * @Date: 2020-01-20 15:05:07 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2020-01-20 15:25:07
 */

/**
 * 
 * @param {*} head 
 * LeetCode 24 Swap Nodes in Pairs
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @return {ListNode}
 */


var swapPairs = function(head) {
    if(head === null){
        return head;
    }
    var fastL = head.next;
    var slowL = head;
    if(fastL === null){
        return slowL;
    }
    var lastHead = fastL;
    
    slowL.next=swapPairs(fastL.next);
    fastL.next=slowL;
    return lastHead;
};