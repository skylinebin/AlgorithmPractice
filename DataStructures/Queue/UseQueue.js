/**
 * @author SkylineBin
 * @time 2018-8-22
 * @function Using a Queue Structure Function
 * 
 */

function Queue() {
    let items = [];

    // add element into this queue
    this.enqueue = function(element) {
        items.push(element);
    }

    // remove element from this queue
    this.dequeue = function() {
        return items.shift();
    }

    // find the first element of this queue
    this.front = function() {
        return items[0];
    }

    // check this queue is empty
    this.isEmpty = function() {
        return items.length == 0;
    }

    // get size of this queue
    this.size = function() {
        return items.length;
    }

    // print this queue
    this.print = function() {
        console.log(items.toString());
    }
} 

let queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("Tom");
queue.enqueue("Jerry");

queue.enqueue("Kerven");

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();

console.log('front: ', queue.front());

queue.enqueue('Marry');
queue.print();