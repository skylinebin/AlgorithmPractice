/****
 * 
 * 使用 动态规划的思想 实现 背包问题
 * 背包问题实质是 组合优化问题
 * 问题描述：
 * 给定固定大小可携重W的背包，及一组有价值和重量的物品
 * 使总重量不超过W,且总价值最大
 * 物品   重量   价值   
 * 1       2      3
 * 2       3      4
 * 3       4      5
 * 
 * 
 */

/**
 * 使用动态规划解决 0-1 版本的背包问题
 *
 * @param {*} capacity 允许负重大小
 * @param {*} weights 重量数组
 * @param {*} values 价值数组
 * @param {*} n
 */
function knapSack (capacity, weights, values, n) {
    var i, w, a, b, kS = [];
    for (let i = 0; i <= n; i++) {
        kS[i] = [];    
    }

    for (let j = 0; j <= n; j++) {
        for (let w = 0; w <= capacity; w++) {
            if (j == 0 || w == 0) {
                kS[j][w] = 0;
            } else if (weights[j-1] <= w) {
                a = values[j-1] + kS[j-1][w-weights[j-1]];
                b = kS[j-1][w]; // 当找到可以构成解决方案的物品时，选择价值较大的那一个
                kS[j][w] = (a > b) ? a : b; // max(a,b)
            } else {
                kS[j][w] = kS[j-1][w];
            }
        }
    }
    findValues(n, capacity, kS, weights, values);
    return kS[n][capacity];
}


function findValues(n, capacity, kS, weights, values) {
    var i = n;
    var k = capacity;
    console.log('解决方案包含以下物品：');

    while (i > 0 && k > 0) {
        if (kS[i][k] !== kS[i-1][k]) {
            console.log('物品'+i+',重量: ' + weights[i-1] + ',价值: '+ values[i-1]);
            i--;
            k = k - kS[i][k];
        } else {
            i--;
        }
    }
}

var values = [3, 4, 5];
var weights = [2, 3, 4];
var capacity = 7;
var n = values.length;
console.log(knapSack(capacity, weights, values, n));