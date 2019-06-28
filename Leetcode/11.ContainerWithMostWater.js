/*
 * @Author: SkylineBin 
 * @Date: 2019-06-28 16:37:57 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-28 16:50:26
 */


/*****
 * 
 * 
 * 柱状值数组能够装水的最大容量
 * 
 * 
 */

/**
 * @param {number[]} height
 * @return {number}
 */
// 以下算法时间复杂度为 O(n^2)
var maxArea = function(height) {
    let backout=0;
    if(height.length <2){
        return backout;
    }
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            backout = Math.max(backout, Math.min(height[i],height[j])*(j-i));
        }
    }
    return backout;
};

// 以下算法复杂度为 O(n)
var maxArea2 = function(height){
    let backout=0,left=0,right=height.length-1;
    while(left<right){
        backout= Math.max(backout, Math.min(height[left],height[right])*(right-left));
        if(height[left]<height[right]){
            left++;
        } else{
            right--;
        }
    }
    return backout;  
}