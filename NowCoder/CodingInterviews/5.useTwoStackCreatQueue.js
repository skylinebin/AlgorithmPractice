/****
 * 
 * 用两个栈来实现一个队列， 完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 
 */

// first version

var stack1 = [],
    stack2 = [];

function push(node) {
    // write code here
    stack1.push(node);
}

function pop() {
    if (stack2.length === 0) {
        while (stack1.length !== 0) {
            stack2.push(stack1.pop());
        }
        return stack2.pop();
    } else {
        return stack2.pop();
    }
}

function isEmpty(){
    if(stack2.length===0 && stack1.length===0){
        return true;
    }else{
        return false;
    }
}

/* 
 * 涉及理论： 队列
 * 普通解法： 遍历
 * 改进方向：
 *
 *
 */