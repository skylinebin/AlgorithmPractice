/***
* 
* 
* 
* 
***/
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

// 思路错误,不是先算完求和再转换成链表
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
console.log();
// var nodeone = arrayToLinkNode([2,4,3]);
// var nodetwo = arrayToLinkNode([5,6,4]);
var nodeone = arrayToLinkNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
var nodetwo = arrayToLinkNode([5,6,4]);

console.log(addTwoNumbersold(nodeone, nodetwo));


var addTwoNumbers = function (l1, l2) {
    // 定义进位
    var carry = 0;
    var p = l1,q=l2;
    while (p.next != null || q.next != null) {

    }

}