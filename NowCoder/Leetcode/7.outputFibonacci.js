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

let n = 39;
console.log(Fibonacci(n));

/* 
 * 涉及理论： 循环
 * 普通解法： 遍历
 * 改进方向：尾递归
 *
 *
 */

function tailFibonacci(n,ac1=0,ac2=1){
    if(n<=1) {return ac2}
    return tailFibonacci(n-1, ac2, ac1+ac2);
}

function Fibonacci2(n){
    if(n===0){
        return 0;
    }
    return tailFibonacci(n,ac1=0,ac2=1);
}

console.log(Fibonacci2(n));


/*****
 * 
 * 使用动态规划思维思想解决
 * 
 * 
 */

function Fibonacci3(n){
    let f=0,s=1;
    if(n===0){return 0;}
    while(n--){
        s+=f;
        f=s-f;
    }
    return f;
}

console.log(Fibonacci3(n));