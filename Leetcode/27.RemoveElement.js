/*
 * @Author: SkylineBin 
 * @Date: 2019-07-18 22:06:03 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-18 22:10:48
 */

/****
 * 
 * 
 * 额外空间复杂度为1的方法去除数组中值为 val 的项，返回新数组的长度 len
 * 并且可以保证数组前 len 项是理想值
 * 
 */

var removeElement = function(nums, val) {
    let len = 0;
    nums.map((value,index)=>{
        if(value !== val){
            nums[len++]  = value;
        }
    })
    return len;
};

// 改进版方法  
// 发现一个 问题 使用 var 会比 let 更快
// 思路，从后往前，相等就删掉，索引也不会影响
var removeElement2 = function(nums, val) {
    for(var i=nums.length-1;i>=0;i--){
        if(nums[i]===val){
            nums.splice(i,1);
        }
    }
    return nums.length;
};

