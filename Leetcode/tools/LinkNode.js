
/**
 *
 * 封装将数组转换成链表的方法
 * @param {*} array
 * @returns linkNode 
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function arrayToLinkNode(array) {
    if (array.length <= 0) {
        return null;
    }
    let linkNode = new ListNode(array[0]);
    for (let i = 1; i < array.length; i++) {
        let node = new ListNode(array[i]);
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
}

let arr = [1,2,3,4,5];
console.log(arrayToLinkNode(arr));

module.exports = arrayToLinkNode;