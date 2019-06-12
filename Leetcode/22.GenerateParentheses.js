/*
 * @Author: SkylineBin 
 * @Date: 2019-06-12 21:05:07 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-12 21:11:45
 */

/****
 * 
 * 生成 n 组 括号组成的字符串集合
 * 
 * 
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let backArr = [];
    function compose(left, right, str) {
        if (!left && !right && str.length) {
            backArr.push(str);
        }
        if(left) {
            compose(left - 1, right, str+'(');
        }
        if(left < right) {
            compose(left, right - 1, str+')');
        }
    }

    compose(n,n,'');
    return backArr;
};

console.log(generateParenthesis(0));