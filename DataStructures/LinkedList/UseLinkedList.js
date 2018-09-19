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

    }

    // remove the element at  this position
    this.removeAt = function(position){
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

                previous.next = current.next;
            }
            length--;

            return current.element;
        }else {
            return null;
        }
    }

    // remove one  element from this linkedlist
    this.remove = function(element){

    }

    // find the index of this linkedlist
    this.indexOf = function(element) {
        
    }

    // check this linkedlist is empty
    this.isEmpty = function(){

    }

    // get the size of this linkedlist
    this.size = function(){

    }

    // get the head of this LinkedList
    this.getHead = function(){

    }

    // to String
    this.toString = function() {

    }

    // print this LinkedList
    this.print = function(){

    }

}

let list = new LinkedList();
list.append(10);
list.append(15);