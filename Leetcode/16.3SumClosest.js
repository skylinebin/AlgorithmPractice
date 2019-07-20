/*
 * @Author: SkylineBin 
 * @Date: 2019-07-20 21:59:36 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-20 22:00:48
 */

/*****
 * 
 * 
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. 
 * Return the sum of the three integers. 
 * You may assume that each input would have exactly one solution.
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1. 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 * 找出和与目标值最近的三个数
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let output;
    nums.sort((a,b) => a-b);
    let minDec = Number.MAX_VALUE;
    for(let i=0;i<nums.length;i++){
        if(i!==0 && nums[i]===nums[i-1]){
            continue;
        }
        let j=i+1;
        let k=nums.length-1;
        while(j<k){
            let tempSum = nums[i]+nums[j]+nums[k];
            if(Math.abs(tempSum-target) < minDec){
                minDec = Math.abs(tempSum-target);
                output = tempSum;
            }
            if(tempSum === target){
                return target;
            }else if(tempSum < target) {
                j++;
            }else {
                k--;
            }

        }
    }
    return output;
};