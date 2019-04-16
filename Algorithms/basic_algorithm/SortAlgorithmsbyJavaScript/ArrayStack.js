/****
 * 
 * 用数组实现栈结构
 * 
 */

var ArrayStack = function (initsize){
    var arr = [];
    var size = 0;
    var init = initsize;

    this.peek = function () {
        if (size === 0) {
            return null;
        }
        return arr[size - 1];
    }

    this.push = function (obj) {
        if (size === init) {
            throw new ErrorEvent("this stack is full");
        }
        arr[size++] = obj;
    }

    this.pop = function () {
        if (size === 0) {
            throw new ErrorEvent("this stack is empty");
        }
        return arr[--size];
    }
}