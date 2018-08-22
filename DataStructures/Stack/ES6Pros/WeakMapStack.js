/**
 * @author SkylineBin
 * @Time 2018-8-22
 * @function Use WeakMap to create s Stack Structure
 * 
 */

 const items = new WeakMap();

 module.exports = class Stack {
     constructor () {
         items.set(this, []);
     }

     push(element) {
         let s = items.get(this);
         s.push(element);
     }

     pop() {
         let s = items.get(this);
         let r = s.pop();
         return r;
     }

    // return the stack top data
    peek() {
        let s = items.get(this);
        return s[s.length - 1];
    }

    // check this stack is empty
    isEmpty() {
        let s = items.get(this);
        return s.length == 0;
    }

    // get the length of this stack
    size() {
        return this[_items].length;
    }

    // clear this stack
    clear() {
        items.set(this, []);
    }

    // print this stack
    print() {
        let s = items.get(this);
        console.log(s.toString());
    }
 }


/*
 use closure to make sure wo can touch WeakMap
*/

 let Stack = (function () {
     const items = new WeakMap();
     class Stack {
         constructor () {
             items.set(this, []);
         }
        //  other function
     }
 })
 
