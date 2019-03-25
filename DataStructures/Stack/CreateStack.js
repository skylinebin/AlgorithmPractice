
/**
 * @author SkylineBin
 * @Time 2018-8-20
 * @function Create a Stack Structure
 */
module.exports = class Stack {

    constructor () {
        // using a Array items to store Stack Datas
        this.items = [];
    }

    // push a element data into this stack
    push(element) {
        this.items.push(element);
    }

    // pop a data from this stack then return this data
    pop () {
        return this.items.pop();
    }

    // return the stack top data
    peek () {
        return this.items[this.items.length - 1];
    }

    // check this stack is empty
    isEmpty () {
        return this.items.length == 0;
    }

    // get the length of this stack
    size () {
        return this.items.length;
    }

    // clear this stack
    clear () {
        this.items = [];
    }

    // print this stack
    print () {
        console.log(this.items.toString());
    }



}
