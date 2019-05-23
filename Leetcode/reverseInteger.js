/*
 * @Author: SkylineBin 
 * @Date: 2019-05-23 16:27:45 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-23 16:47:40
 */

/*****
 * 
 * 逆序一个整数
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * Example 3:
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 */



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) {
        return 0;
    }
    let state = 1;
    let MaxNum = 2**31;
    if (x < 0) {
        state = -1;
        x = - x;
    }
    let num = 0;
    while(x > 0){
        num = num*10 + x % 10;
        x = parseInt(x/10);
    }
    num = num * state
    if (num >= MaxNum) {
        num = 0;
    }
    if (num < -1*MaxNum) {
        num = 0;
    }

    return num;
};

let x = 123;
console.log(reverse(x));


var reverse2 = function (x) {
    let signLabel = true;
    let INT_MAX = Math.pow(2, 31);
    if (x < 0) {
        signLabel = false;
        x = Math.abs(x);
    }
    let backNum = 0;
    while (x > 0) {
        if (backNum > INT_MAX / 10 || (backNum === INT_MAX / 10 && x % 10 > INT_MAX % 10)) {
            return 0;
        }
        backNum = backNum * 10 + x % 10;
        x = parseInt(x / 10);
    }

    backNum = signLabel ? backNum : -backNum;
    return backNum;
};