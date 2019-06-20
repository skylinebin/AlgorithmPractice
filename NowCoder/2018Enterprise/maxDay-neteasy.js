/*
 * @Author: SkylineBin 
 * @Date: 2019-06-20 21:15:56 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-20 21:23:17
 */

/****
 * 
 * 小易独立生活的天数
 * 
 * 
 */


function getMaxDays(x, f, d, p){
    let maxDate = 0;
    x = parseInt(x);
    f = parseInt(f);
    d = parseInt(d);
    p = parseInt(p);
    if (parseInt(f) >= parseInt(d/x)){
        maxDate = parseInt(d/x);
    } else {
        maxDate = parseInt(f);
        maxDate += parseInt((d - f*x)/(x + p));
    }
    return maxDate;
}




var initPre = readline().split(" ");
var x = initPre[0];
var f = initPre[1];
var d = initPre[2];
var p = initPre[3];

print(getMaxDays(x, f, d, p))

// let initPre = [3,5,100,10]

// let x = initPre[0];
// let f = initPre[1];
// let d = initPre[2];
// let p = initPre[3];

// console.log(getMaxDays(x, f, d, p));