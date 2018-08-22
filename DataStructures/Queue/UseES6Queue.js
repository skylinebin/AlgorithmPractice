/**
 * @author SkylineBin
 * @time 2018-8-22
 * @function Using a Queue Structure Function
 * 
 */

const Queue = require('./CreateQueue');

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