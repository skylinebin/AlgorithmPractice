/****
 * 
 * 
 * 给定一个数组A[0, 1, ..., n - 1], 请构建一个数组B[0, 1, ..., n - 1], 
 * 其中B中的元素B[i] = A[0] * A[1] * ... * A[i - 1] * A[i + 1] * ... * A[n - 1]。 
 * 不能使用除法。
 * 
 */

// 解题思路：要先初始化，只有不等的时候才乘


function multiply(array) {
    // write code here
    if (array === null) {
        return null;
    }
    var arrayB = [];
    for (let i = 0; i < array.length; i++) {
        arrayB[i] = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                arrayB[i] = arrayB[i] * array[j];
            }
        }
    }
    return arrayB;
}


// 运行时间： 16 ms
// 占用内存： 5320 k

// test
var arr = [1,2,3];
console.log(multiply(arr));


// ! 算法复杂度更低的解法  
// 分析：可以看作 n*n 的矩阵，对角全是 1, B[i] 是每一行 相乘的结果，矩阵每一行都是 A[0]...A[n-1]
// 先计算下三角部分的值，再倒过来计算上三角的值


function multiply2(array) {

    let arrayB = [];
    arrayB[0] = 1;
    // 计算下三角的值
    for (let i = 1; i < array.length; i++) {
        arrayB[i] = arrayB[i-1] * array[i-1];
    }
    let temp = 1;
    // 倒过来乘一遍计算上三角的值
    for (let j = array.length - 2; j >=0; j--) {
        temp *= array[j+1];
        arrayB[j] *= temp;
    }
    return arrayB;
}

var arr2 = [1, 2, 3];
console.log(multiply2(arr2));