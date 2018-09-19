/**
 * @author SkylineBin
 * @time 2018-9-19日
 * @function use Queue to loop flower 
 * 
 * 
 */

var Queue = require('./CreateQueue');

function hotPotato (nameList, num){
    let queue = new Queue();

    // add all gamer into this queue
    for (let index = 0; index < nameList.length; index++) {
        queue.enqueue(nameList[index]);        
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for (let second = 0; second < num; second++) {
            // move the head data into the end data
            queue.enqueue(queue.dequeue());            
        }
        eliminated = queue.dequeue();
        // remove chosed data
        console.log(eliminated + ' is failed in this game~');        
    }
    return queue.dequeue();
}

let names = ['John', 'Rick', 'Tom', 'Carl', 'Iiva'];
let winner = hotPotato(names, 7);
console.log('The winner of this game is ' + winner);