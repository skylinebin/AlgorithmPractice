/*
 * @Author: SkylineBin 
 * @Date: 2019-05-10 09:16:41 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-10 09:31:25
 */

/******
 * 
 * 用一个栈实现另一个栈的排序
 * 
 * 只允许用一个辅助栈
 * 
 * 
 */

function sortStackByStack(stackData){
    let helpStack = [];
    while (stackData.length !== 0) {
        let tempData = stackData.pop();
        while (helpStack.length !== 0 && tempData > helpStack[helpStack.length - 1]) {
            stackData.push(helpStack.pop());
        }
        helpStack.push(tempData);
        // console.log(stackData);
    }
    while (helpStack.length !== 0) {
        stackData.push(helpStack.pop());
    }
    return stackData;
}

let stackData = [5,2,4,6,8,1,4,9];
console.log(stackData);
console.log(sortStackByStack(stackData));