/*
 * @Author: SkylineBin 
 * @Date: 2019-05-13 09:35:02 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-13 10:16:25
 */


/******
 * 
 * 
 * 判断一个链表是不是回文结构
 * 
 * 
 */


// 最简单方法遍历两次
function checkIfLinkListPalindrome(pHead){
    if (pHead === null) {
        return false;
    }
    let nodeStack = [];
    let tempNode = pHead;
    while (tempNode !== null) {
        nodeStack.push(tempNode.val);
        tempNode = tempNode.next;
    }
    while (tempNode.length !== 0) {
        let lastTempVal = tempNode.pop()
        if (lastTempVal !== pHead.val) {
            return false;
        }
        pHead = pHead.next;
    }
    return true;
}


// 省去一半存储空间的解法
// ! 使用快慢指针 省去一半存储空间
function checkIfLinkListPalindrome2(pHead){
    if (pHead === null) {
        return false;
    }
    let slowPoint = pHead;
    let fastPoint = pHead;
    while (slowPoint.next !== null && fastPoint.next.next !== null) {
        slowPoint = slowPoint.next;
        fastPoint = fastPoint.next.next;
    }

    fastPoint = slowPoint.next;
    let halfNodeStack = [];
    while(fastPoint !== null) {
        halfNodeStack.push(fastPoint.val);
        fastPoint = fastPoint.next;
    }
    let tempHead = pHead;
    while(halfNodeStack.length !==0){
        let tempNodeVal = halfNodeStack.pop();
        if (tempHead.val !== tempNodeVal) {
            return false;
        }
        tempHead = tempHead.next;
    }

    return true;

}