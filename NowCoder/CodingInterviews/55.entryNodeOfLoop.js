/********
 * 
 * 链表中环的入口结点
 * 
 * 
 * 给一个链表， 若其中包含环， 请找出该链表的环的入口结点， 否则， 输出null。
 * 
 * 
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

// 使用存结点的思想解决，当第一次出现相同结点是算作 环的入口结点
//因为每次都要搜索算法复杂度较高
function EntryNodeOfLoop(pHead) {
    if (pHead === null) {
        return null;
    }
    let currentNode = pHead;
    let nodeArr = [];
    while (currentNode.next !== null) {
        if (nodeArr.indexOf(currentNode) === -1) {
            nodeArr.push(currentNode);
        } else {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

// 时间复杂度为 O(N) 的算法,使用快慢指针先判断是否有环，如果有环指向 相遇的点
function EntryNodeOfLoop2(pHead) {

    if (pHead === null || pHead.next === null || pHead.next.next === null) {
        return null;
    }

    let fastNode = pHead.next.next;
    let slowNode = pHead.next;

    // 用于判断有没有环
    while (fastNode !== slowNode) {
        if (fastNode.next.next !== null && slowNode.next !== null) {
            fastNode = fastNode.next.next;
            slowNode = slowNode.next;
        } else {
            return null;
        }
    }
    // 退出循环的时候 fastNode = slowNode 且是第一次相遇的点

    fastNode = pHead;
    while (fastNode !== slowNode) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }

    return fastNode;
}

// 使用断链法解决问题 
// 所谓断链法就是把每一个结点的 next 都置空，如果存在环，从环的入口断掉后
// ! 此方法不能判断链表无环的情况，并且破坏了链表的结构
function EntryNodeOfLoop3(pHead) {
    if (pHead === null || pHead.next === null) {
        return null;
    }
    let firstNode = pHead.next;
    let secondNode = pHead;

    while (firstNode !== null) {
        secondNode.next = null;
        secondNode = firstNode;
        firstNode = firstNode.next;
    }

    return secondNode;

}