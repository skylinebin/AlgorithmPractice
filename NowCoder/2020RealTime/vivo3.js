/****
 * 
 * 使用 动态规划的思想 实现 背包问题
 * 背包问题实质是 组合优化问题
 * 
 * 
 */




//请把代码实现写在solution方程里面
function solution(arr1, arr2, arr3) {

    var sum = arr1[0]; //总金额

    var maxValue; //用于输出能买到的最大热度

    //TODO write your code here

    maxValue = 0;
    var i, w, a, b, kS = [];

    let maxLength = arr2.length;

    for (let i = 0; i <= arr2.length; i++) {
        kS[i] = [];
    }

    for (let j = 0; j <= maxLength; j++) {
        for (let w = 0; w <= sum; w++) {
            if (j == 0 || w == 0) {
                kS[j][w] = 0;
            } else if (arr2[j - 1] <= w) {
                a = arr3[j - 1] + kS[j - 1][w - arr2[j - 1]];
                b = kS[j - 1][w];
                kS[j][w] = (a > b) ? a : b;
            } else {
                kS[j][w] = kS[j - 1][w];
            }
        }
    }

    maxValue = kS[maxLength][sum];

    return maxValue;

}


let arr1 = [1000];
let arr2 = [200,600,100,180,300,450];
let arr3 = [6,10,3,4,5,8];


console.log(solution(arr1, arr2, arr3));