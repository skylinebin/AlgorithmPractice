/***
 * 
 * 我们可以用2 * 1 的小矩形横着或者竖着去覆盖更大的矩形。 
 * 请问用 n个2 * 1 的小矩形无重叠地覆盖一个2 * n的大矩形， 
 * 总共有多少种方法？
 * 
 * 
*/

// ! 本质：斐波拉契数列  

// 最简单版本 暴力递归  算法复杂度 O(2^n)
function rectCover(number) {
    if (number <= 0) {
        return 0;
    } else if(number === 1 || number === 2) {
        return number;
    } else {
        return rectCover(number - 1) + rectCover(number - 2);
    }
}

// 中级版本 算法复杂度 O(N)
function rectCover2(number) {
    if (number <= 0) {
        return 0;
    }
    if (number === 1 || number === 2) {
        return number;
    }
    let res = 2; // 当前数值
    let pre = 1;
    let temp = 0;
    for (let i = 3; i <= number; i++) {
        temp = res;
        res = res + pre;
        pre = temp;
    }
    return res;
}

// 变态版本 算法复杂度 O(logN)
// 本质是将 求 斐波拉契数列第 N 项 的问题转换成  求矩阵的 N 次方问题

// 先创建矩阵求幂的函数  
function matrixPower(m, p){
    let res = [[0],[0]];
    for (let i = 0; i < m.length; i++) {
        res[i][i] = 1;
    }
    let temp = m;
    for (; p !== 1; p >>= 1) {
        if ((p & 1) !== 0) {
            res = muliMatrix(res, temp);
        }
        temp = muliMatrix(temp, temp);        
    }
    return res;
}

// 矩阵相乘的方法  
function muliMatrix(m1, m2) {
    let res2 = [];
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m2[0].length; j++) {
            for (let k = 0; k < m2.length; k++) {
                res2[i][j] += m1[i][k] * m2[k][j];                
            }            
        }        
    }
    return res2;
}

function rectCover3(number) {
    if (number <= 0) {
        return 0;
    }
    if (number === 1 || number === 2) {
        return number;
    }
    let base = [[1,1],[1,0]]; // 当前数值
    let result = matrixPower(base, number-2);
    return result[0][0] + result[1][0];

}


// Test demo  
var testNum = 3;
console.log(rectCover(testNum)); // 0
console.log(rectCover2(testNum)); // 0
console.log(rectCover3(testNum)); // 0