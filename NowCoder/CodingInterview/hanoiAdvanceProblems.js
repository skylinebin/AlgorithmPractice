/*
 * @Author: SkylineBin 
 * @Date: 2019-05-10 10:08:12 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-10 12:13:11
 */

/*******
 * 
 * 解决改进版汉诺塔问题
 * 
 * 有 左中右 三根柱子
 * 将 N 层塔 从左侧柱子 移到 右侧柱子需要走的最小步数
 * 最上面是第一层，最下面是第 N 层
 * 只能将 小的层数放在大的层数之上
 * 
 * 
 * 
 */

// 处理移动的过程用于递归
function processMoving(layerNum, left, middle, right, fromSide, toSide) {
    if (layerNum === 1) {
        if (fromSide === middle || toSide === middle) {
            console.log("Move 1 from " + fromSide + " to " + toSide);
            return 1;
        } else {
            console.log("Move 1 from " + fromSide + " to " + middle);
            console.log("Move 1 from " + middle + " to " + toSide);
            return 2;
        }
    } else {
        if (fromSide === middle || toSide === middle) {
            // 此状况是 从 左移到中 (另一个是 右) 
            // ! 这是相邻的两个柱子移动需要找到第三个柱子 将 N-1 个从 from 移动到第三个柱子 第 N 层移到 toSide 后 ，再将 N-1 层从第三个柱子移到 toSide
            let anotherToSide = (fromSide === left || toSide === left) ? right : left;
            let countNum1 = processMoving(layerNum - 1, left, middle, right, fromSide, anotherToSide);
            let countNum2 = 1;
            console.log("Move " + layerNum +" from " + fromSide + " to " + toSide);
            let countNum3 = processMoving(layerNum - 1, left, middle, right, anotherToSide, toSide);
            return countNum1 + countNum2 + countNum3;
        } else {
            // ! 从左 移动到 右 或者 从右移动到 左
            let countNum1 = processMoving(layerNum - 1, left, middle, right, fromSide, toSide);
            let countNum2 = 1;
            console.log("Move " + layerNum + " from " + fromSide + " to " + middle);
            let countNum3 = processMoving(layerNum - 1, left, middle, right, toSide, fromSide);
            let countNum4 = 1;
            console.log("Move " + layerNum + " from " + middle + " to " + toSide);
            let countNum5 = processMoving(layerNum - 1, left, middle, right, fromSide, toSide);
            return countNum1 + countNum2 + countNum3 + countNum4 + countNum5;
        }
    }
}


function hanoiAdvanceProblems(layerNum, left, middle, right) {
    if (layerNum < 1) {
        return 0;
    }

    return processMoving(layerNum, left, middle, right, left, right);
}

let layerNum = 3;
let left = 'left';
let middle = 'middle';
let right = 'right';
console.log(hanoiAdvanceProblems(layerNum, left, middle, right));


console.log("----------------------------------------");
console.log("----------------------------------------");

// ! 非递归方法解决改进版汉诺塔问题
// 只有四个动作
let Action = {
    No : 0,
    LToM : 1,
    MToL : 2,
    MToR : 3,
    RToM : 4
}


function hanoiAdvanceProblemsWithoutRecursion(layerNum, left, middle, right) {
    let leftStack = [];
    let middleStack = [];
    let rightStack = [];
    leftStack.push(Number.MAX_SAFE_INTEGER);
    middleStack.push(Number.MAX_SAFE_INTEGER);
    rightStack.push(Number.MAX_SAFE_INTEGER);
    for (let i = layerNum; i > 0; i--) {
        leftStack.push(i);
    }
    let actionRecord = [Action.No];
    let stepCounter = 0;
    while (rightStack.length !== layerNum + 1) {
        stepCounter += fromStacktoTostack(actionRecord, Action.MToL, Action.LToM, leftStack, middleStack, left, middle);
        stepCounter += fromStacktoTostack(actionRecord, Action.LToM, Action.MToL, middleStack, leftStack, middle, left);
        stepCounter += fromStacktoTostack(actionRecord, Action.RToM, Action.MToR, middleStack, rightStack, middle, right);
        stepCounter += fromStacktoTostack(actionRecord, Action.MToR, Action.RToM, rightStack, middleStack, right, middle);
    }

    return stepCounter;
}

function fromStacktoTostack(actionRecord, preAction, currentAction, fromStack, toStack, fromSide, toSide) {
    if (actionRecord[0] !== preAction && fromStack[fromStack.length - 1] < toStack[toStack.length - 1]) {
        toStack.push(fromStack.pop());
        console.log("Move " + toStack[toStack.length - 1] + " from " + fromSide + " to " + toSide);
        actionRecord[0] = currentAction;
        return 1;
    }
    return 0;
}

console.log(hanoiAdvanceProblemsWithoutRecursion(layerNum, left, middle, right));