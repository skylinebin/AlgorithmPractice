/**
 * @author SkylineBin
 * @time 2018-8-29
 * @function add priority queue
 *  
 */

function PriorityQueue() {
    let items = [];

    function QueueElement (element, priority) {
        this.element = element;
        this.priority = priority;
    }

    // add element into this queue
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);

        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }            
        }
        if (!added) {
            items.push(queueElement);
        }
    }

    // remove element from this queue
    this.dequeue = function () {
        return items.shift();
    }

    // find the first element of this queue
    this.front = function () {
        return items[0];
    }

    // check this queue is empty
    this.isEmpty = function () {
        return items.length == 0;
    }

    // get size of this queue
    this.size = function () {
        return items.length;
    }

    // print this queue
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} -- ${items[i].priority}`);            
        }
    }
}


let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Kervin", 1);
priorityQueue.enqueue("Skr", 5);
priorityQueue.enqueue("Sam", 3);
priorityQueue.enqueue("Bob", 6);
priorityQueue.print();
