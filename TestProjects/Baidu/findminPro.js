/****
 * 2019.04.02
 * 百度实习生笔试算法题第一题
 * N, P， Q, Array
 * 输入包括四个参数
 * 
 * num 表示项目成员人数 N 的整数
 * projCmpt 成功完成项目的成员得分减少的值
 * restDec 错误分数大于零的团队成员的错误分数减少的值
 * errScore 初始错误分数列表
 * 
 * 
 */

function findMaxNuminArray(array){
    let arrLength = array.length;
    let maxId = 0;
    for (let i = 0; i < arrLength; i++) {
        if (array[i] > array[maxId]) {
            maxId = i;
        }    
    }
    return maxId;
}

// 判断是否所有值都为 0 了
function checkEndArr(array) {
    let statArr = true;
    if (array[findMaxNuminArray(array)] === 0) {
        statArr = false;
    }
    return statArr;
}


function findMinPro(num, projCmpt, restDec, errScore) {
    if (errScore.length !== num || errScore.length === 0) {
        return null;
    }
    let proNum = 0;
    let maxTemp = findMaxNuminArray(errScore);
    let beSub = restDec;
    while (checkEndArr(errScore)) {
            for (let j = 0; j < errScore.length; j++) {
                if (j !== maxTemp) {
                    beSub = restDec;
                }else {
                    beSub = projCmpt;
                }
                if (errScore[j] < beSub) {
                    errScore[j] = 0;
                } else {
                    errScore[j] = errScore[j] - beSub;
                }
            }
        maxTemp = findMaxNuminArray(errScore);
        proNum++;
    }

    return proNum;
}



var num = 3;
var projCmpt = 2;
var restDec = 1;
var errScore = [4, 3, 2];
// var num = 4;
// var projCmpt = 3;
// var restDec = 1;
// var errScore = [9, 8, 2, 5];

console.log(findMinPro(num, projCmpt, restDec, errScore));
// 3
// 5