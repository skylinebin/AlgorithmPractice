/*
 * @Author: SkylineBin 
 * @Date: 2019-07-14 20:58:36 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-14 21:01:02
 */


/****
 * 
 * 输入数字字符串，求最大回文数
 * 
 * 
 * 
 */

function maxTractNum(str){
    let max = 0;
    if(!str || str.length<=1){
        return Math.max(max,parseInt(str))
    }
    this.dfs = function(str,i,j){
        let tempData = str.slice(i,j);
        if(tempData === tempData.split('').reverse().join('')){
            if(parseInt(tempData)> max){
                max = parseInt(tempData);
            }
        }
        if(j<str.length){
            this.dfs(str,i,j+1);
        }
        return;
    }
    
    for(let i=0;i<str.length-1;i++){
        this.dfs(str,i,1);
    }
    return max;
}
let str = "121191";
console.log(maxTractNum(str));