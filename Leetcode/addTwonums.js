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

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var addTwoNumbers = function (l1, l2) {
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
    console.log(lastnum);
    console.log(j);
    var backlink = new ListNode(lastnum % 10);
    for (let x = 1; x <= j; x++) {
            var node = new ListNode(lastnum % Math.pow(10, x));
            current = backlink;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            console.log(current);
        // if(lastnum % Math.pow(10, x) > 10){
        //     backlink.val = lastnum % Math.pow(10, x+1);
        // } else {
        //     backlink.val = lastnum % Math.pow(10, x);
        // }
        // temp.next = backlink;
    }
    
    return backlink;
};

// Test Algorithm
// var testNum = 5;
console.log();
var nodeone = new ListNode(2);
nodeone.next = new ListNode(4);
nodeone.next.next = new ListNode(3);

var nodetwo = new ListNode(5);
nodetwo.next = new ListNode(6);
nodetwo.next.next = new ListNode(4);

console.log(addTwoNumbers(nodeone, nodetwo));