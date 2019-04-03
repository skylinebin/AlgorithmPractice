/****
 * 
 * JavaScript 实现 斐波拉契数列
 * 
 */


// 递归方式实现 斐波拉契数列
function fibonacci (num) {
    if (num === 1 || num ===2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// 非递归方式实现斐波拉契数列
function fib (num) {
    var n1 = 1,
    n2 = 1,
    n = 1;
    for (let i = 3; i <= num; i++) {
        n = n1 + n2;
        n1 = n2;
        n2 = n;    
    }
    return n;
}

// 在其他语言中，递归调用通常比非递归更慢
// ! ES6 存在尾调用优化，所以递归不会更慢

let num = 8;
console.log(fibonacci(num));
console.log(fib(num));

