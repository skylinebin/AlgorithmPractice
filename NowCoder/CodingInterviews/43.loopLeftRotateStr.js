/**
 * 
 * 汇编语言中有一种移位指令叫做循环左移（ ROL）， 现在有个简单的任务， 就是用字符串模拟这个指令的运算结果。 
 * 对于一个给定的字符序列S， 请你把其循环左移K位后的序列输出。 
 * 例如， 字符序列S = ”abcXYZdef”, 要求输出循环左移3位后的结果， 即“ XYZdefabc”
 *
 */


function LeftRotateString(str, n) {
    // write code here
    n = parseInt(n);
    if (str == null || str == '') {
        return "";
    }
    var thislength = String(str).length;
    if (n == 0) {
        return str;
    } else if (n > 0) {
        str = String(str);
        var realrol = n % thislength;
        var output = "";
        if (realrol == 0) {
            return str;
        } else {
            // for (var i = realrol; i < thislength; i++) {
            //     output = output + str[i];
            // }
            // for (var j = 0; j < realrol; j++) {
            //     output = output + str[j];
            // }
            output = (str.substr(0, realrol).split('').reverse().join('') + str.substr(realrol, thislength - realrol).split('').reverse().join('')).split('').reverse().join('');
            return String(output);
        }

    }
}

var teststr = "";
console.log('------------------------------------');
console.log(LeftRotateString(teststr,6));
console.log('------------------------------------');

console.log('------------------------------------');
console.log(teststr.length);
console.log('------------------------------------');

/* 
 * 涉及理论： 字符串处理
 * 普通解法： 拼接
 * 改进方向：
 *
 *
 */
