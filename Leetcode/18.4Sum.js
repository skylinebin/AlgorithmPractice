/*
 * @Author: SkylineBin 
 * @Date: 2019-07-21 11:14:03 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-21 11:17:01
 */


/******
 * 
 * Given an array nums of n integers and an integer target,
 * are there elements a, b, c, and d in nums such that a + b + c + d = target? 
 * Find all unique quadruplets in the array which gives the sum of target.
 * 
 * 
 * input:  
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * output:
 * 
 * A solution set is:
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 * ]
 * 
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length <4){
        return [];
    }
    let output = [];
    nums.sort((a,b) => a-b);
    for(let i=0;i<nums.length;i++){
        if(i!==0 && nums[i]===nums[i-1]){
            continue;
        }
        let j,k,m,len;
        len = nums.length-1;
        // second num is also like first num
        for(j=i+1;j<len;j++){
            // to ignore duplicate quadruplets.
            if(j!==i+1 && nums[j]==nums[j-1]){
                continue;
            }
            k=j+1;
            m= nums.length-1;
            while(k<m){
                let tempSum = nums[i]+nums[j]+nums[k]+nums[m];
                if(tempSum === target && j!==k){
                    output.push([nums[i],nums[j],nums[k],nums[m]]);
                    k++;
                    // to ignore duplicate quadruplets.
                    while(k<m && nums[k]===nums[k-1]){
                        k++;
                    }
                }else if(tempSum < target){
                    k++;
                }else {
                    m--;
                }
            }    
        } 
    }
    
    return output;
};