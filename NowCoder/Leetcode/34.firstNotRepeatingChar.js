/*******
 * 
 * 
 * 在一个字符串(0 <= 字符串长度 <= 10000， 全部由字母组成) 
 * 中找到第一个只出现一次的字符, 并返回它的位置, 
 * 如果没有则返回 - 1（ 需要区分大小写）.
 * 
 * 
 */

function FirstNotRepeatingChar(str) {
    if (str.length <= 0 || str === '' || str === null) {
        return -1;
    }

    let countArr = [];
    for (let i = 0; i <= str.length-1; i++) {
        if (countArr[str[i]]) {
            countArr[str[i]] = countArr[str[i]] + 1;
        } else {
            countArr[str[i]] = 1;
        }
    }
    for (let j = 0; j <= str.length-1; j++) {
        if (countArr[str[j]] === 1) {
            return j;
        }
    }
    return -1;
}

let str = 'asdfdjdniasdan';
console.log(FirstNotRepeatingChar(str));