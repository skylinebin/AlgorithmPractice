/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 21:42:07 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-05 22:06:19
 */

/****
 * 
 * 最少班级问题
 * 
 * n 门课，每门课 ai 个人选
 * 
 * 求最少班级数
 * 
 */

function findMinClass(numArr){
    let n = numArr.length;
    let minClass = 0;
    let minNum = numArr[0];
    for (let i = 0; i < n; i++) {
        if(numArr[i] < minNum){
            minNum = numArr[i];
        }
    }
    let minCommon = 1;
    for (let j = 1; j <=minNum; j++) {
        let state = true;
        for (let m = 0; m < n; m++) {
            if(numArr[m]%j !== 0){
                state = false;
            }
        }
        if(state){
            minCommon = j;
        }
    }
    for (let k = 0; k < n; k++) {
        minClass += parseInt(numArr[k]/minCommon);
    }

    return minClass;
}

let numArr = [4,6,8,12,10,6];
console.log(findMinClass(numArr));