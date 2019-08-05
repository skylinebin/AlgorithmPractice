/*
 * @Author: SkylineBin 
 * @Date: 2019-06-30 21:31:56 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-30 21:55:41
 */


/*****
 * 
 * 疯牛问题
 * 
 * 思路：将问题转换成 能分配C头牛的最大间隔是多少
 * 
 * 
 */

function crazyCow(numN,numC,locations){
    let maxLen = 0;
    if(numC===1){
        return maxLen;
    }
    let copyL = locations.slice(0);
    copyL.sort();
    let left = 0;
    let right = copyL[copyL.length-1]-copyL[0];

    this.check = function(midNum,numC,copyL){
        let tempData = copyL[0];
        let count = 1;
        for (let i = 0; i < copyL.length; i++) {
            if(copyL[i]-tempData >= midNum){
                tempData= copyL[i];
                count++;
                if(count>=numC){
                    return true;
                }
            }
        }
        return false;
    }

    while(right >= left){
        let mid = left + parseInt((right - left)/2);
        if(this.check(mid,numC,copyL)){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return left - 1;
}

let numN = 5;
let numC = 3;
let locations = [1,2,8,4,9];
console.log(crazyCow(numN,numC,locations));