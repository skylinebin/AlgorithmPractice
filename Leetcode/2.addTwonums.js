/******
 * 
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * 
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 * 
 */
// ! 本质涉及:

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

const arrayToLinkNode = require('./tools/LinkNode');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// ! 思路错误,不是先算完求和再转换成链表
var addTwoNumbersold = function (l1, l2) {
    var num1 =0;
    var num2 =0;
    var i=0,j=0;
    while (l1 !== null) {
        num1 = num1 + l1.val * Math.pow(10, i);
        l1 = l1.next;
        i++;
    }
    while (l2 !== null) {
        num2 = num2 + l2.val * Math.pow(10, j);
        l2 = l2.next;
        j++;
    }
    var lastnum = num1 + num2;
    var strnum = lastnum.toString();
    var arrnum = strnum.split('');
    console.log(arrnum);
    arrnum = arrnum.reverse();
    console.log(arrnum);
    var arrInt = [],j=0;

    arrnum.map(i=> arrInt[j++] = parseInt(i));
    let linkNode = new ListNode(arrInt[0]);
    for (let i = 1; i < arrInt.length; i++) {
        let node = new ListNode(arrInt[i]);
        let current;
        if (linkNode == null){
            linkNode = node;
        } else {
            current = linkNode;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    
    return linkNode;
};

// Test Algorithm
// var testNum = 5;
// console.log();
// var nodeone = arrayToLinkNode([2,4,3]);
// var nodetwo = arrayToLinkNode([5,6,4]);
var nodeone = arrayToLinkNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
var nodetwo = arrayToLinkNode([5,6,4]);


let addTwoNumbers = function (l1, l2) {
    // 定义进位
    let carry = 0;
    let p = l1,q=l2;
    let numStack = [];
    while (p != null || q != null) {
        let currentNum = 0;
        if (p != null && q != null) {
            currentNum = p.val + q.val;
        } else if (p != null || q != null) {
            currentNum = p === null ? q.val : p.val;
        }
        currentNum = carry === 1 ? currentNum + 1 : currentNum;
        if (currentNum > 9) {
            currentNum = currentNum % 10;
            carry = 1;
        } else {
            carry = 0;
        }
        numStack.push(currentNum);
        p = p?p.next:p;
        q = q?q.next:q;
    }
    if (carry) {
        numStack.push(1);
        carry = 0;
    }

    let backLink = new ListNode(numStack.shift());
    let tempNode = backLink;
    while (numStack.length) {
        tempNode.next = new ListNode(numStack.shift());
        tempNode = tempNode.next;
    }
    return backLink;
}

var node1 = arrayToLinkNode([5]);
var node2 = arrayToLinkNode([5, 6, 4]);

console.log(addTwoNumbers(node1, node2));