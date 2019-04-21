/******
 * 
 * 输入链表返回 按照链表顺序的数组
 * 
 * 
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function linkNodeToArray(linkNode) {
    if (linkNode === null) {
        return [];
    }
    let array = [];

    while(linkNode !== null){
        array.push(linkNode.val);
        linkNode = linkNode.next;
    }
    return array;
}

// let arr = [1,2,3,4,5];
// console.log(arrayToLinkNode(arr));

module.exports = linkNodeToArray;