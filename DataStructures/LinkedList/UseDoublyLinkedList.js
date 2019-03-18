/****
 * 
 * @author SkylineBin
 * @time 2018-10-10
 * @function create doublyLinkedList by JavaScript
 * 
 */

function DoublyLinkedList( ) {
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    let length = 0;
    let head = null;
    let tail = null;

//  insert a element at this position
    this.insert = function(position,element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if (position === 0) {
            //  在双向链表的头部插入一个元素
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
            //  在链表的尾部插入一个元素
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
            //  在链表中间插入该元素
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            length++;
            return true;
        } else {
            return false;
        }
    };

    //  remove element at this position
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            let current = head,
            previous,
            index = 0;

            if (position === 0) {
                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1){
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                // 直接连接 前一项 和 后一项
                previous.next = current.next;
                current.next.prev = previous;
            }

            length--;
            return current.element;
        } else {
            return null;
        }
    };

}