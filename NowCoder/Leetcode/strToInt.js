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

function StrToInt(str) {
    
    if (str === null || str.length === 0 || str === '+' || str === '-') {
        return 0;
    }
    let start = 0;
    let pn = 0; // 用于判断该数是正是负


}