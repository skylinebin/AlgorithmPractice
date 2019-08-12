/*
 * @Author: SkylineBin 
 * @Date: 2019-08-12 22:03:17 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-12 22:06:25
 */


/****
 * 蘑菇街
 * 
 * 有一个X*Y的网格，小团要在此网格上从左上角到右下角，只能走格点且只能向右或向下走。
 * 请设计一个算法，计算小团有多少种走法。给定两个正整数int x,int y，请返回小团的走法数目。
 * 
 * 输入描述
 * 输入包括一行，空格隔开的两个正整数x和y，取值范围[1,10]。
 * 
 * 输出描述
 * 输出一行，表示走法的数目
 * 
 * 
 * 动态规划的公式：
 * 
 * dp[i][j]=dp[i-1][j]+dp[i][j-1]
 * 
 * 附加条件：
 * dp[0][j]=1;
 * dp[i][0]=1;
 * 
 * 
 */

function findWays(x,y){
    let dps = [];
    for(let i=0;i<=x;i++){
        dps[i]=[];
        dps[i][0]=1;
        for(let j=0;j<=y;j++){
            if(i===0){
                dps[i][j]=1;
            }
        }
    }
    for(let i=1;i<=x;i++){
        for(let j=1;j<=y;j++){
            dps[i][j]=dps[i-1][j]+dps[i][j-1];
        }
    }
    return dps[x][y];
}




// let init = readline().split(' ');
// let x=parseInt(init[0]);
// let y=parseInt(init[1]);
// print(findWays(x,y));

let x=3;
let y=2;
console.log(findWays(x,y));