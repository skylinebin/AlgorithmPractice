/****
 * 
 * 大家都知道斐波那契数列， 现在要求输入一个整数n， 请你输出斐波那契数列的第n项（ 从0开始， 第0项为0）。n<=39
 * 
 */

// first version
function Fibonacci(n) {
    // write code here
    var beforelastnum = 0;
    var lastnum = 1;
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        for (var i = 2; i <= n; i++) {
            result = beforelastnum + lastnum;
            beforelastnum = lastnum;
            lastnum = result;
        }
        return result;
    }
}

/* 
 * 涉及理论： 循环
 * 普通解法： 遍历
 * 改进方向：
 *
 *
 */