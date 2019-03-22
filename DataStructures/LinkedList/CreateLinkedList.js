/**
 * @author SkylineBin
 * @time 2018-9-19
 * @function Create a LinkedList structure 
 * 封装链表结构
 * 
 */

// let 

module.exports = class LinkedList {
        constructor() {
            // using a Array items to store Queue Datas
            // this.items = [];
            this.length = 0;
            this.head = null;
            this.Node = function (element) {
                this.element = element;
                this.next = null;
            }
        }



        // append another element after the end of this linkedlist
        append(thiselement) {
            let node = new this.Node(thiselement),
                current;
            if (this.head == null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.length++;
        }

        // insert an element into this position
        insert(position, element) {
            if (position > -1 && position < this.length) {
                let node = new this.Node(element),
                    current = this.head,
                    previous,
                    index = 0;

                if (position === 0) {
                    // insert element at the head of this LinkedList
                    node.next = current;
                    this.head = node;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }

                    // insert elemrnt in this position
                    node.next = current;
                    previous.next = node;
                }
                this.length++;
                return true;
            } else {
                return false;
            }
        };

        // remove the element at  this position
        removeAt(position) {
            // check Cross-border
            if (position > -1 && position < length) {
                let current = this.head,
                    previous,
                    index = 0;

                if (position === 0) {
                    this.head = current.next;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    // current element will be recyclied by JavaScript GC
                    previous.next = current.next;
                }
                this.length--;

                return current.element;
            } else {
                return null;
            }
        };

        // remove one  element from this linkedlist
        remove(element) {
            // find the position
            // remove this element at the position
            let index = this.indexOf(element);
            return this.removeAt(index);
        };

        // find the index of this linkedlist
        indexOf(element) {
            let current = this.head;
            index = -1;
            while (current) {
                if (element === current.element) {
                    return index;
                }
                index++;
                current = current.next;
            }
            return -1;
        };

        // check this linkedlist is empty
        isEmpty() {
            return this.length === 0;
        };

        // get the size of this linkedlist
        size() {
            return this.length;
        }

        // get the head of this LinkedList
        getHead() {
            return this.head;
        }

        // to String
        toString() {
            let current = this.head;
            let string = '';
            while (current) {
                string += current.element + (current.next ? '_' : '');
                current = current.next;
            }
            return string;


        }

        // print this LinkedList
        print() {
            let current = this.head;
            let outstr = '';
            while (current) {
                // console.log(current.element);
                outstr += String(current.element) + (current.next ? ' ' : '');
                current = current.next;
            }
            console.log('------------------------------------');
            console.log(outstr);
            console.log('------------------------------------');
        }
}