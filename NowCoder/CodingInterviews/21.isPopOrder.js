/*****
 * 
 * 输入两个整数序列， 第一个序列表示栈的压入顺序， 请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。 例如序列1, 2, 3, 4, 5 是某栈的压入顺序， 序列4, 5, 3, 2, 1 是该压栈序列对应的一个弹出序列，
 * 但4, 3, 5, 1, 2 就不可能是该压栈序列的弹出序列。（ 注意： 这两个序列的长度是相等的）
 * 
 * 
 * 
 */

// 解题思路：如果发现有入栈的元素 弹出栈了，就不保留该元素，并把出栈队列的指针指向下一个

function IsPopOrder(pushV, popV) {
    if (pushV.length !== popV.length) {
        return false;
    }
    let len = pushV.length;
    let tempStack = [];
    let j = 0;
    for (let i = 0; i < len; i++) {
        tempStack.push(pushV[i]);
        while ( tempStack.length !==0 && tempStack[tempStack.length - 1] === popV[j]) {
            tempStack.pop();
            j++;
        }
    }
    return tempStack.length === 0;
}

let pushV = [1, 2, 3, 4, 5];
let popV = [4, 5, 3, 1, 2];
console.log(IsPopOrder(pushV, popV));