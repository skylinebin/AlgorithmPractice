/**
 * @author SkylineBin
 * @Time 2018-8-20
 * @function Create a Stack Structure using Symbol
 */

let _items = Symbol(); 

module.exports = class Stack {

    constructor() {
        // using a Array items to store Stack Datas
        this[_items] = [];
    }

    // push a element data into this stack
    push(element) {
        this[_items].push(element);
    }

    // pop a data from this stack then return this data
    pop() {
        return this[_items].pop();
    }

    // return the stack top data
    peek() {
        return this[_items][this[_items].length - 1];
    }

    // check this stack is empty
    isEmpty() {
        return this[_items].length == 0;
    }

    // get the length of this stack
    size() {
        return this[_items].length;
    }

    // clear this stack
    clear() {
        this[_items] = [];
    }

    // print this stack
    print() {
        console.log(this[_items].toString());
    }



}
