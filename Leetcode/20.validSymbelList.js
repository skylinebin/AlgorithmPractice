/*
 * @Author: SkylineBin 
 * @Date: 2019-05-25 15:35:02 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-25 15:51:37
 */


/*******
 * 
 * 
 * 检查字符串是否是成对闭合的
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * 
 * 
 * ()[]{}
 * true
 * 
 * ([)]
 * false
 * 
 * {[]}
 * true
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 * 
 * by SkylineBin
 */
var isValid = function (s) {
    if (s.length === 0) {
        return true;
    }
    let openArr = ['(','{','['];
    let closeArr = [')','}',']'];
    let tempStack = [];
    for (let i = 0; i < s.length; i++) {
        if (openArr.indexOf(s[i]) !== -1 || closeArr.indexOf(s[i]) !== -1) {
            if (openArr.indexOf(s[i]) !== -1) {
                tempStack.push(s[i]);
            } else if (closeArr.indexOf(s[i]) !== -1) {
                if (tempStack.length === 0 || closeArr.indexOf(s[i]) !== openArr.indexOf(tempStack.pop())) {
                    return false;
                }
            }
        }else {
            return false;
        }
    }
    if (tempStack.length !== 0) {
        return false;
    }
    return true;
};

let str = '([)]';
console.log(isValid(str));


// 优秀解答参考
let isValid2 = function (s) {
    let map = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    let stack = [];
    for (let letter of s) {
        if (map[letter] != undefined) stack.push(letter);
        else if (map[stack.pop()] != letter) return false;
    }
    return stack.length === 0 ? true : false;
};