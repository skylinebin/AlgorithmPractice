/****
 * 
 * 使用桶排序的思想找出一个数组排序后，相邻两数差值的最大值
 * 
 */

function findMaxGap(nums){
    if (nums === null || nums.length < 2) {
        return 0;
    }
    var len = nums.length;
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    for (let i = 0; i < len; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }
    if (min === max) {
        return 0;
    }
    var hasNum = [];
    var maxs = [];
    var mins = [];
    var bid = 0;
    for (let j = 0; j < len; j++) {
        bid = parseInt((nums[j] - min) * len / (max - min)); // 确定这个数放在哪个桶里面
        mins[bid] = hasNum[bid] ? Math.min(mins[bid], nums[j]) : nums[j];
        maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], nums[j]) : nums[j];
        hasNum[bid] = true;
    }
    var res = 0;
    var lastMax = maxs[0];
    var count = 1;
    for (; count <= len; count++) {
        if (hasNum[count]) {
            // 对每一个 非空桶都要判断 它的最小值与前一个非空桶的最大值之间的差值，找到全局最大值
            res = Math.max(res, mins[count] - lastMax);
            lastMax = maxs[count];
        }
    }
    return res;
}


var testarr = [1,3,6,15,27,32];
console.log(findMaxGap(testarr));