/******
 * 
 * 将一个字符串转换成一个整数(实现Integer.valueOf(string) 的功能， 
 * 但是string不符合数字要求时返回0)， 
 * 要求不能使用字符串转换整数的库函数。 
 * 数值为0或者字符串不是一个合法的数值则返回0。
 * 
 * 
 * 
 */

// 后续可以加上是否溢出的判断

function StrToInt(str) {
    
    if (str === null || str.length === 0 || str === '+' || str === '-') {
        return 0;
    }
    let start = 0;
    let pn = 0; // 用于判断该数是正是负
    if (str[0] === '+'){
        pn = 0;
    }else if (str[0] === '-') {
        pn = 1;
    } else if (str[0] < '0' || str[0] > '9') {
        return 0;
    }else {
        start = str[0] - '0';
    }
    let i = 1;
    while (str[i]) {
        if (str[i] >= '0' && str[i] <= '9') {
            start = start * 10 + (str[i] - '0');
        } else {
            return 0;
        }
        i++;
    }
    start = pn === 1? -1*start:start;
    return start;
}

let str = '+2147483647';
let str1 = '1a33';
console.log(StrToInt(str1));