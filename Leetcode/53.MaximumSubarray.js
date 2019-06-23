/*
 * @Author: SkylineBin 
 * @Date: 2019-06-23 15:34:16 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-23 16:58:20
 */


/****
 * 
 * 求一个数组的顺序和最大的子数组
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -1*Number.MAX_VALUE;
    if(nums.length === 1){
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <=nums.length; j++) {
            let sum = nums[i];
            for (let m = i+1; m <j; m++) {
                sum += nums[m];
            }
            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
};

// 以上方案超时

let nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums));

var maxSubArray2 = function(nums) {
    let maxSum = -1*Number.MAX_VALUE;
    if(nums.length === 1){
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            sum += nums[j];
            maxSum = Math.max(maxSum,sum,nums[i],nums[j]);
        }
    }
    return maxSum;
};
console.log(maxSubArray2(nums));

var maxSubArray3 = function(nums) {
    let maxSum = -1*Number.MAX_VALUE;
    if(nums.length === 1){
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            sum += nums[j];
            if(maxSum < sum){
                maxSum = dum;
            }
            if(maxSum < nums[i]){
                maxSum = nums[i];
            }
            if(maxSum < nums[j]){
                maxSum = nums[j];
            }
        }
    }
    return maxSum;
};


// 以下方案是时间复杂度最低，空间复杂度较高
var maxSubArray4 = function(nums) {
    let globalMax = nums[0],
        localMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], nums[i] + localMax);
        globalMax = Math.max(globalMax, localMax);
    }
    return globalMax;
};