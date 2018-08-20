/**
 * @author SkylineBin
 * @time 2018-8-20
 * @function Using Stack with Es6 Symbol
 */

var Stack = require('./SymbolStack');

console.log(Stack);

var stack = new Stack();
console.log(stack.isEmpty());

// push data into this stack
stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(7);
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();



// The BUG　of using Symbols to Create Stack

// get all properties of this stack class
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1);
stack.print();

// End of testing BUG
