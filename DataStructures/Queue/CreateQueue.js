/**
 * @author SkylineBin
 * @time 2018-8-22
 * @function Create a Queue Structure 
 * 
 */

module.exports = class Queue {
    constructor() {
        // using a Array items to store Queue Datas
        this.items = [];
    }
    // add element into this queue
    enqueue(element) {
        this.items.push(element);
    }

    // remove element from this queue
    dequeue() {
        return this.items.shift();
    }

    // find the first element of this queue
    front() {
        return this.items[0];
    }

    // check this queue is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // get size of this queue
    size() {
        return this.items.length;
    }

    // print this queue
    print() {
        console.log(this.items.toString());
    }

}