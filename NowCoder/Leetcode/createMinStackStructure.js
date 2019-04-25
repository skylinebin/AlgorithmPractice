/*******
 * 
 * 
 * 定义栈的数据结构， 请在该类型中实现一个能够得到栈中所含最小元素的min函数
 * （ 时间复杂度应为O（ 1））。
 * 
 * 
 */

// 解题思路：使用两个数组，一个存栈的数据，另一个存当前最小值
// 压栈的时候 判断压入的是否比当前最小值小，如果比它小就压入当前值，如果不比它小则压入min数组的最顶端的值
// 弹出的时候，一起弹出栈顶的数据

let arrdata = [];
let mindata = [];

function push(node) {
    // write code here
    if (arrdata.length === 0) {
        arrdata[0] = node;
        mindata[0] = node;
    } else if (node <= mindata[mindata.length-1]) {
        arrdata[arrdata.length] = node;
        mindata[mindata.length] = node;
    } else {
        arrdata[arrdata.length] = node;
        mindata[mindata.length] = mindata[mindata.length - 1];
    }
}

function pop() {
    // write code here
    if (arrdata.length === 0) {
        return;
    }
    mindata.pop();
    return arrdata.pop();
}

function top() {
    // write code here
    if (arrdata.length === 0) {
        return;
    }
    return arrdata[arrdata.length-1];
}

function min() {
    if (arrdata.length === 0) {
        return;
    }
    return mindata[mindata.length- 1];
}


push(4);
push(2);
push(3);
push(1);
push(6);

console.log(min());
console.log(top());
console.log(pop());
console.log(top());