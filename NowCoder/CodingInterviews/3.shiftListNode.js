/****
 * 
 * 输入一个链表， 按链表值从尾到头的顺序返回一个ArrayList。
 * 
 * 
 */

// first version

function printListFromTailToHead(head) {
    // write code here
    var alldata = [];
    while (head != null) {
        alldata.unshift(head.val);
        head = head.next;
    }
    return alldata;
}

/* 
 * 涉及理论： 数组处理
 * 普通解法： 遍历
 * 改进方向：
 *
 *
 */