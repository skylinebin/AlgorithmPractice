/*
 * @Author: SkylineBin 
 * @Date: 2019-06-23 14:31:25 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-23 15:01:23
 */


/****
 * 
 * 返回数组中不重复的部分
 * 返回的是长度
 * 原数组中的数对应位置也需要改变
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length > 1){
        for(let i=1;i<nums.length;i++){
            if(nums[i-1] === nums[i]){
                nums.splice(i-1,1);
                i=i-1;
            }
        }      
    }
    return nums.length;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
// let nums = [1,1,2];
// console.log(removeDuplicates(nums));


// leetcode 官方解决方案

var removeDuplicates2 = function(nums) {
    if(nums.length === 0 || nums.length === 1){
        return nums.length;
    }
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i]=nums[j];
        }     
    }
    return i+1;
};

console.log(removeDuplicates2(nums));