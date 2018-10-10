/**
 * @author SkylineBin
 * @time 2018-9-19
 * @function Using a LinkedList Structure Function
 * 
 */

function LinkedList() {
    // we need a Node class to help us create one LinkedList
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    // append another element after the end of this linkedlist
    this.append = function(thiselement) {
        let node = new Node(thiselement),
            current;
        if (head == null){
            head = node;
        } else {
            current = head;    
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    // insert an element into this position
    this.insert = function(position, element) {
        if (position > -1 && position < length) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if (position === 0) {
                // insert element at the head of this LinkedList
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                // insert elemrnt in this position
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    // remove the element at  this position
    this.removeAt = function(position){
        // check Cross-border
        if(position > -1 && position < length){
            let current = head,
            previous,
            index = 0;

            if(position === 0){
                head = current.next;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;    
                }
                // current element will be recyclied by JavaScript GC
                previous.next = current.next;
            }
            length--;

            return current.element;
        }else {
            return null;
        }
    };

    // remove one  element from this linkedlist
    this.remove = function(element){
        // find the position
        // remove this element at the position
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    // find the index of this linkedlist
    this.indexOf = function(element) {
        let current = head;
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
    this.isEmpty = function(){
        return length === 0;
    };

    // get the size of this linkedlist
    this.size = function(){
        return length;
    }

    // get the head of this LinkedList
    this.getHead = function(){
        return head;
    }

    // to String
    this.toString = function() {
        let current = head;
        string = '';
        while (current) {
            string += current.element + (current.next ? '_': '');
            current = current.next;
        }
        return string;


    }

    // print this LinkedList
    this.print = function(){
        let current = head;
        let outstr = '';
        while (current) {
            // console.log(current.element);
            outstr += String(current.element) + (current.next ? ' ':'');
            current = current.next;
        }
        console.log('------------------------------------');
        console.log(outstr);
        console.log('------------------------------------');
    }

}

let list = new LinkedList();
list.append(10);
list.append(15);
list.append(4);
list.append(16);
list.append(13);

list.print();