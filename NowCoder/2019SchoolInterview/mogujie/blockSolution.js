/*
 * @Author: SkylineBin 
 * @Date: 2019-08-07 10:02:01 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-07 10:04:27
 */


/****
 * 
 * 方格走法
 * 
 * 有一个X*Y的网格，小团要在此网格上从左上角到右下角，只能走格点且只能向右或向下走。
 * 请设计一个算法，计算小团有多少种走法。给定两个正整数int x,int y，请返回小团的走法数目。
 * 
 * 输入描述
 * 输入包括一行，空格隔开的两个正整数x和y，取值范围[1,10]。
 * 输出描述
 * 输出一行，表示走法的数目
 * 
 * 输入
 * 3 2
 * 输出
 * 10
 * 
 * 
 * 
 * dfs 解法
 * 
 * 
 */

function findAllSolution(x,y){
    let count = 0;
    function dfs(tx,ty){
        if(tx===x&&ty===y){
            count++;
            return;
        }else if(tx<x&&ty<y){
            dfs(tx+1,ty);
            dfs(tx,ty+1);
        }else if(tx<=x&&ty<=y){
            if(tx<x){
                dfs(tx+1,ty);
            }
            if(ty<y){
                dfs(tx,ty+1);
            }
        }else{
            return;
        }
    }
    dfs(0,0);
    return count;
}







let init = readline().split(' ');
let x = parseInt(init[0]);
let y = parseInt(init[1]);
print(findAllSolution(x,y))