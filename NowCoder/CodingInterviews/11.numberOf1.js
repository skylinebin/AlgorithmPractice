/***
* 
* 输入一个整数， 输出该数二进制表示中1的个数。 其中负数用补码表示。
* 
* 
***/
// ! 本质涉及: 位运算、二进制转换、补码
function NumberOf1(n) {
    // 左移 1 与每个位相与
    let count = 0;
    let flag = 1;
    while (flag !== 0) {
        if ((n & flag) !== 0) {
            count++;
        }
        flag = flag << 1;
    }
    return count;
}

// 可能的最优解  
function NumberOf1best(n) {
    // 每算一次和 n-1 相与
    let count = 0;
    while (n !== 0) {
        ++count;
        n = n & (n-1);
    }
    return count;
}


// javascript 特性的解法
function NumberOf1two(n) {
    // javascript 中的负数直接以补码的形式存储
    if (n < 0) {
        n = n >>> 0;
    }
    var numArr = n.toString(2).split('1');
    return numArr.length - 1;
}

// Test Algorithm
var testNum = 3;
console.log(NumberOf1(testNum));
console.log(NumberOf1two(testNum));
console.log(NumberOf1best(testNum));