/*
 * @Author: SkylineBin 
 * @Date: 2019-07-21 16:46:17 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-21 16:58:14
 */


/*****
 * 
 * 使用 O(log(m+n))的算法复杂度找出数组 nums1 和 数组 nums2 的中位数
 * 
 * 
 * 
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 思路是分成两部分，左边与右边比较，如果左边能够确定，中位数一定出现在左边
 * 
 */



var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length){ // to keep m < n
        [nums1,nums2]=[nums2,nums1];
    }
    let m = nums1.length;
    let n = nums2.length;
    let minIndex = 0,maxIndex=m,halfLen=parseInt((m+n+1)/2);
    while(minIndex <= maxIndex){
        let i = parseInt((minIndex + maxIndex)/2); // i 取 nums1 数组的中间部分
        let j = halfLen-i; // j 取 总数中位数 减去 i 的长度部分
        if(i < m && nums2[j-1]>nums1[i]){
            minIndex = i+1;
        }else if(i>0 && nums1[i-1]>nums2[j]){
            maxIndex = i-1;
        }else {
            let maxLeft = 0;
            if(i===0){
                maxLeft = nums2[j-1];
            }else if(j===0){
                maxLeft = nums1[i-1];
            } else {
                maxLeft = Math.max(nums1[i-1], nums2[j-1]);
            }
            if((m+n)%2 === 1){
                return parseFloat(maxLeft);
            }
            let minRight = 0;
            if(i===m){
                minRight = nums2[j];
            }else if(j===n){
                minRight = nums1[i];
            }else {
                minRight = Math.min(nums2[j], nums1[i]);
            }
            return (maxLeft + minRight)/2.0;
        }
    }
    
    return 0.0;
};

let nums1 = [1,3];
let nums2 = [2];

console.log(findMedianSortedArrays(nums1,nums2));