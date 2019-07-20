/*
 * @Author: SkylineBin 
 * @Date: 2019-05-25 15:53:51 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-20 21:59:21
 */


/*****
 * 
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? 
 * Find all unique triplets in the array which gives the sum of zero.
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
    let backArrs = [];
    if (nums.length < 3) {
        return backArrs;
    }

    let target = 0;
    nums = nums.sort((a, b) => a - b); // 对数组进行排序，由小到大
    for (let i = 0; i < nums.length -2; i++) {
        if (nums[i] > target) {
            break;
        }
        if (i>0 && nums[i] === nums[i-1]) {
            continue;
        }
        let j = i+1; // 第二个数从大于 i 开始
        let k = nums.length - 1; // 第三个数从最大开始

        while(j < k){
            let tempSum = nums[i] + nums[j] + nums[k]; // 暂存当前状态
            if (tempSum === target) {
                backArrs.push([nums[i], nums[j], nums[k]]);
                while (nums[j] == nums[j+1]){
                    j++;
                }
                while(nums[k] === nums[k-1]){
                    k--;
                }
                j++;
                k--;
            } else if (tempSum < target) {
                j++;
            } else if (tempSum > target) {
                k--;
            }
        }
    }

    return backArrs;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

// best answer

let threeSum2 = function (nums) {
    let output = [];
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length; i++) {
        if (i!==0 && nums[i] === nums[i-1]) {
            continue;
        }
        let j = i+1;
        let k = nums.length - 1;
        while(j < k){
            let tempSum = nums[i] + nums[j] + nums[k];
            if(tempSum === 0){
                output.push([nums[i], nums[j], nums[k]]);
                j++;
                while(j<k && nums[j]===nums[j-1]){
                    j++;
                }
            } else if(tempSum < 0){
                j++;
            } else {
                k--;
            }
        }
    }
    return output;
}