/*
 * @Author: SkylineBin 
 * @Date: 2019-07-07 13:53:10 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-07 16:23:35
 */

/****
 * 
 * 字节跳动第四题
 * 
 * 
 * 积分与喜爱值的背包问题
 * 
 * 
 */


function knapSack (n, weights, values, m) {
    let  a, b, kS = [];
    for (let i = 0; i <= m; i++) {
        kS[i] = [];    
    }

    for (let j = 0; j <= m; j++) {
        for (let w = 0; w <= n; w++) {
            if (j == 0 || w == 0) {
                kS[j][w] = 0;
            } else if (weights[j-1] <= w) {
                a = values[j-1] + kS[j-1][w-weights[j-1]];
                b = kS[j-1][w]; 
                kS[j][w] = (a > b) ? a : b; 
            } else {
                kS[j][w] = kS[j-1][w];
            }
        }
    }
    return kS[m][n];
}

let weights = [69,60,8];
let values = [10,1,2];
let n = 68;
let m = 3;
console.log(knapSack(n, weights, values, m));


let datasOne = readline().split(' ');
let n = parseInt(datasOne[0]);
let m = parseInt(datasOne[1]);
let weights = [];
let values = [];
let temp;
for (let i = 0; i < m; i++) {
    temp = readline().split(' ');
    weights.push(parseInt(temp[0]));
    values.push(parseInt(temp[1]));
}
print(knapSack(n, weights, values, m));
