/****
 * 
 * 不使用四则运算符实现两个整数相加
 * 
 * 
 */

function Add(num1, num2) {
    
    while (num2 !== 0){
        var temp = num1 ^ num2;
        num2 = (num1 & num2) << 1;
        num1 = temp;
    }
    return num1;
}

var num1 = 3;
var num2 = 13;
console.log(Add(num1, num2));