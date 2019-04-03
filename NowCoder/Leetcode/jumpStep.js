/****
 * 
 * @author SkylineBin 
 * @time 2018-10-15
 * @function 跳台阶问题
 */

//  一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

function jumpFloor(number) {
    // write code here
    // let number = parseInt(number);
    if (number <= 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else if (number == 2) {
        return 2;
    } else {
        return jumpFloor(number - 1) + jumpFloor(number - 2);
    }

}


/* 
 * 涉及理论： 递归
 * 普通解法： 遍历
 * 改进方向：将递归换成非递归
 *
 *
 */

function jumpF (num) {
    if (num <= 0) {
        return 0;
    }else if (num === 1 || num ===2) {
        return num;
    }else {
        var n1 = 1,
        n2 = 2,
        n = 1;
        for (var i = 3; i <= num; i++) {
            n = n1 + n2;
            n1 = n2;
            n2 = n;    
        }
        return n;
    }
}

var testNum =  10;
console.log(jumpFloor(testNum));
console.log(jumpF(testNum));