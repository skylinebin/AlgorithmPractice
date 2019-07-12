/*
 * @Author: SkylineBin 
 * @Date: 2019-05-10 09:41:19 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-10 09:52:26
 */

/*****
 * 
 * 
 * 只使用递归而不使用其他数据结构实现一个栈的逆序
 * 
 * 
 */


// 第一步构造返回栈底元素的方法
function getStackBottomElement(stackData){
    let tempData = stackData.pop(); // 栈顶元素
    if (stackData.length ===0) {
        return tempData;
    } else {
        let preData = getStackBottomElement(stackData);
        stackData.push(tempData);
        return preData; // 栈不为空时返回的是前一个元素
    }
}

// 对栈进行逆序
// 到底之后逐层返回，压完就好
function reverseStackByRecursion(stackData) {
    if (stackData.length === 0) {
        return;
    }
    let tempBottomData = getStackBottomElement(stackData);
    reverseStackByRecursion(stackData);
    stackData.push(tempBottomData);
}


let stackData = [5, 2, 4, 6, 8, 1, 4, 9];

console.log(stackData);

reverseStackByRecursion(stackData);

console.log(stackData);

// console.log(getStackBottomElement(stackData)); // 5
