/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-05-09 20:20:53 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-09 20:34:12
 * 
 */

/****
 * 
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，
 * 他们的最大值分别为{4,4,6,6,6,5}； 
 * 
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
 *  {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 * 
 * 
 */

function maxInWindows(num, size) {
    let backArray = [];
    if (num.length === 0 || num === null || size === 0 || num.length < size) {
        return backArray;
    }
    if (num.length >= size) {
        let currentStart = 0;
        for (let j = size; j <= num.length; j++) {
            let tempArr = num.slice(currentStart++, j);
            tempArr.sort((a,b) => a-b);
            backArray.push(tempArr[tempArr.length - 1]);
        }
    }

    return backArray;
}

let nums = [2, 3, 4, 2, 6, 2, 5, 1];
let size = 3;
console.log(maxInWindows(nums, size));