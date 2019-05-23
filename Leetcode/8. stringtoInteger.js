/*
 * @Author: SkylineBin 
 * @Date: 2019-05-23 16:53:39 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-23 16:54:31
 */

/****
 * 
 * String 转 整数
 * 
 * 
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let i = 0;
    let num = 0,
        flag = 0,
        state = false;
    let INT_MAX = Math.pow(2, 31);
    while (i < str.length) {
        if (str[i] === '-' && num === 0 && flag === 0 && !state) {
            state = true;
            flag = -1;
        } else if (str[i] === '+' && num === 0 && flag === 0 && !state) {
            state = true;
            flag = 1;
        } else if (num === 0 && str[i] === ' ' && !state) {
            i++;
            continue;
        } else if (str[i] >= '0' && str[i] <= '9') {
            state = true;
            num = num * 10 + parseInt(str[i]);
        } else if (str[i] < '0' || str[i] > '9') {
            break;
        }

        i++;

    }
    if (flag === 0) {
        flag = 1;
    }
    if (num > INT_MAX && flag === -1) {
        num = INT_MAX;
    } else if (num >= INT_MAX && flag === 1) {
        num = INT_MAX - 1;
    }


    return num * flag;
};