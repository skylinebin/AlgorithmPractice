
/**
 * @author SkylineBin
 * @time 2018-8-20
 * @function Using Stack
 */

function Stack () {
    var items = [];

    // push a element data into this stack
    this.push = function (element) {
        items.push(element);
    }

    // pop a data from this stack then return this data
    this.pop = function () {
        return items.pop();
    }

    // return the stack top data
    this.peek = function () {
        return items[items.length - 1];
    }

    // check this stack is empty
    this.isEmpty = function () {
        return items.length == 0;
    }

    // get the length of this stack
    this.size = function () {
        return items.length;
    }

    // clear this stack
    this.clear = function () {
        items = [];
    }

    // print this stack
    this.print = function () {
        console.log(items.toString());
    }
}

// console.log(Stack);

// init one Stack Class
let stack = new Stack();
console.log(stack.isEmpty());

// push data into this stack
stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(7);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(9);

stack.print();

stack.pop();
stack.pop();
console.log(stack.size());
stack.print();

