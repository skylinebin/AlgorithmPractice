/*
 * @Author: SkylineBin 
 * @Date: 2019-07-30 20:17:40 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-30 20:22:14
 */


/*****
 * 
 * 你需要爬上一个N层的楼梯，在爬楼梯过程中， 每阶楼梯需花费非负代价，
 * 第i阶楼梯花费代价表示为cost[i]，一旦你付出了代价，你可以在该阶基础上往上爬一阶或两阶。
 * 你可以从第 0 阶或者 第 1 阶开始，请找到到达顶层的最小的代价是多少。
 * N和cost[i]皆为整数，且N∈[2,1000]，cost[i]∈ [0, 999]。
 * 
 * 
 * 输入描述：
 * 输入为一串空格分割的整数，对应cost数组，例如
 * 10 15 20
 * 
 * 
 * 输出描述
 * 输出一个整数，表示花费的最小代价
 * 15
 * 
 * 
 * 动态规划问题
 * 
 * dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
 * 
 */

function minPrice(data){
    let minP;
    let storeA = [];
    storeA.push(0);
    storeA.push(0);
    for(let i=2;i<=data.length;i++){
        storeA[i] = Math.min(storeA[i-1]+data[i-1],storeA[i-2]+data[i-2]);
    }
    minP = storeA[storeA.length-1];
    return minP;
}

let datas = readline().split(' ');
let data = [];
for(let i=0;i<datas.length;i++){
    if(datas[i]){
        data.push(parseInt(datas[i]));
    }
}
print(minPrice(data));