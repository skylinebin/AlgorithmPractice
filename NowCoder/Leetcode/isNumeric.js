/*****
 * 
 * 判断一个字符串是否表示数值
 * 
 * 
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。
 *  但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 * 
 * 
 * 
 */


// 考虑可能性的解法
function isNumeric(s) {
    if (s.length === 0 || s === null){
        return false;
    }
    let nDolt =false; // 用于记录小数点 是否出现过
    let nSymbol = false; // 用于 标记 +- 符号是否出现过
    let nTen = false; // 用于标记 e 是否出现过

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'e' || s[i] === 'E') {
            // e 后面没有数字 或者 已经出现过一次 E
            if (i === s.length-1 || nTen) {
                return false;
            }
            nTen = true;
        }else if (s[i] === '+' || s[i] === '-') {
            // 已经出现一次符号，这一次出现的符号前一个字符不是 'e' 或者 'E'
            if (nSymbol && s[i-1] !== 'e' && s[i-1] !== 'E') {
                return false;
            }
            if (!nSymbol && i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
            nSymbol = true;
        }else if (s[i] === '.'){
            // 出现了两个小数点或者在E以后出现小数点都不是合法的数字
            if (nDolt || nTen) {
                return false;
            }
            nDolt = true;
        } else if(s[i] < '0' || s[i] > '9'){
            return false;
        }
    }
    return true;
}

let s = '-1E-16';
console.log(isNumeric(s));


// 使用正则表达式简写

function isNumeric2(s) {
    let numreg = /^[\+\-]?\d*(\.\d+)?([eE][\+\-]?\d+)?$/;
    let result = numreg.test(s);
    return result;
}

// 奇怪的测试用例
// "-.123" 是对的？


console.log(isNumeric2(s));