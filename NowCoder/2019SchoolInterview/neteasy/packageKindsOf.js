/*
 * @Author: SkylineBin 
 * @Date: 2019-07-25 09:56:58 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-25 10:15:21
 */


/******
 * 
 * 牛牛准备参加学校组织的春游, 出发前牛牛准备往背包里装入一些零食, 牛牛的背包容量为w。
 * 牛牛家里一共有n袋零食, 第i袋零食体积为v[i]。
 * 牛牛想知道在总体积不超过背包容量的情况下,他一共有多少种零食放法(总体积为0也算一种放法)。
 * 
 * 
 * 输入描述：
 * 
 * 输入包括两行
 * 第一行为两个正整数n和w(1 <= n <= 30, 1 <= w <= 2 * 10^9),表示零食的数量和背包的容量。
 * 第二行n个正整数v[i](0 <= v[i] <= 10^9),表示每袋零食的体积。
 * 
 * 输出描述：
 * 输出一个正整数, 表示牛牛一共有多少种零食放法。
 * 
 * 输入示例：  
 * 
 * 3 10 
 * 1 2 4
 * 
 * 输出示例：  
 * 8
 * 
 */

function findMethods(numN,numW,vols){
    let sum = 0;
    let outside = 0;
    vols.sort((a,b)=>a-b);
    for(let i=0;i<numN;i++){
        sum+=vols[i];
    }

    // 深度优先遍历
    this.dfs = function(index,total){
        if(total>numW){
            return;
        }
        if(total<=numW){
            outside++;
            console.log(total);
        }
        for (let k = index; k < numN; k++) {
            // 把当前值和没有经历过的值都来一遍
            this.dfs(k+1,total+vols[k]);
        }
    }
    if(sum<=numW){
        // 当所有零食之和小于背包承重时，就有 2**numN 种方法
        return Math.pow(2,numN);
    }else {
        this.dfs(0,0);
    }
    return outside;
}

let numN = 4;
let numW = 10;
let vols = [1,2,4,5];
console.log(findMethods(numN,numW,vols));