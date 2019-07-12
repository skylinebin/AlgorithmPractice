/***
* 
* 输入一个链表，
* 输出该链表中倒数第k个结点。
* 
* 
***/
// ! 本质涉及: 链表的查操作，快慢指针的解析
// 慢指针 比快指针迟 k 个，先找到第 k 个 数据给快指针，慢指针从头开始
// 向后移动 k 个 快指针达到末尾，慢指针到达倒数 第 k个 结点

function ListNode(x){
    this.val = x;
    this.next = null;
}
// 1,{1,2,3,4,5}

function FindKthToTail(head, k) {
    // write code here
    if (head == null || k <= 0) {
        return null;
    }
    let slowTail = head;
    let fastTail = head;
    for (let index = 0; index < k - 1; index++) {
        if (fastTail.next != null) { // 排除数组越界，不能使用 fastTail != null
            fastTail = fastTail.next;
        }else {
            return null;
        }
    }
    while(fastTail.next != null) {
        fastTail = fastTail.next;
        slowTail = slowTail.next;
    }
    return slowTail;
}






let list1 = new ListNode(1);
let list2 = new ListNode(2);
list1.next = list2;
let list3 = new ListNode(3);
list2.next = list3;
let list4 = new ListNode(4);
list3.next = list4;
let list5 = new ListNode(5);
list4.next = list5;
// list.append(10);
// list.append(15);
// list.append(4);
// list.append(16);
// list.append(13);

// Test Algorithm
console.log(FindKthToTail(list1, 3));
