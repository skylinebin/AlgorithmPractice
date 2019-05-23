/*
 * @Author: SkylineBin 
 * @Date: 2019-05-23 16:55:24 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-23 16:56:19
 */

/*****
 * 
 * 判断数字是否是回文数
 * 
 * 
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let tempArr = [];
    x = String(x);
    for (let i = 0; i < x.length; i++) {
        tempArr.push(x[i]);
    }
    let j = 0;
    while (tempArr.length > 0) {
        if (tempArr.pop() !== x[j++]) {
            return false;
        }
    }

    return true;
};