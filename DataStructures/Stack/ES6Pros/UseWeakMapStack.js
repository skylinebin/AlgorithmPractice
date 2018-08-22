/**
 * @author SkylineBin
 * @time 2018-8-22
 * @function Using Stack with Es6 WeakMap
 */

 var Stack = require('./WeakMapStack');

 console.log(Stack);

 var stack = new Stack();
 console.log(stack.isEmpty());

 // push data into this stack
 stack.push(5);
 stack.push(8);

 console.log(stack.peek());