/*
 * @Author: SkylineBin 
 * @Date: 2019-06-29 09:14:26 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-29 10:06:21
 */



/*****
 * 
 * 
 * 将整数转换成罗马数字
 * 
 */


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbolArr = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let valueArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let curNum = num,i=0,outStr='';
    while(curNum > 0){
            if(curNum - valueArr[i]>=0){
                outStr+=symbolArr[i];
                curNum = curNum - valueArr[i]
            }else {
                i++;
            }
    }
    return outStr;
};


// 好的思路
// 千，百，十，个
// class Solution {
//     public String intToRoman(int n) {
//         String M[] = {"", "M", "MM", "MMM"};
//         String C[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
//         String X[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
//         String I[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
//         return M[n / 1000] + C[(n / 100) % 10] + X[(n / 10) % 10] + I[n % 10];
//     }
// }

// 需要注意的是 JavaScript 中可能需要取整操作
var intToRoman2 = function(num) {
    num = parseInt(num);
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let i = parseInt((num / 1000)? (num / 1000):0),
        j = parseInt(((num / 100) % 10)? (num / 100) % 10:0),
        k = parseInt(((num / 10) % 10)? (num / 10)%10:0),
        m = parseInt(num % 10);
    return M[i] + C[j] + X[k] + I[m];
}


let num = 1994;
console.log(intToRoman(num));
console.log(intToRoman2(num));