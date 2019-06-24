/*
 * @Author: SkylineBin 
 * @Date: 2019-06-24 21:13:08 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-24 21:25:26
 */

/****
 * 
 * 最长上升子序列问题
 * 
 * 经典动态规划的思想
 * 
 * 状态是什么？ fs[i]
 * 状态转移方程是什么？
 * fs[i] = fs[j] + 1 (if fs[j] < fs[i] && j<i)
 * 
 */

function LISbyDP(arr){
    if(arr.length <=1){
        return arr.length;
    }
    let maxLen = 0;
    let fs = [];
    fs[0]=1;
    for (let i = 1; i < arr.length; i++) {
        fs[i]=1;
        for (let j = 0; j < i; j++) {
            if(arr[j]<arr[i]){
                fs[i]= Math.max(fs[j]+1,fs[i]);
            }
        }
    }
    for (let k = 0; k < fs.length; k++) {
        maxLen = Math.max(maxLen, fs[k]);
        
    }
    return maxLen;
}

let arr = [1,5,3,4,6,9,7,8];
console.log(LISbyDP(arr));
