/**
 * @author SkylineBin
 * @time 2019-03-18
 * @function 使用 javascript 进行模拟 荷兰国旗分类(将数组分为小于等于大于num 的三类)
 * 是划分 从 L 到 R 区域内 如果整个数组, L = 0; R = arrays.length - 1;
 * 
 * @Algorithm_bigO O(N) 
 *  N is the length of arrays
 * 
 */

module.exports = function DutchFlagArray(arrays, L, R, num) {
    if (arrays == null || arrays.length < 2) {
        return;
    }
    let less = L - 1;
    let more = R + 1;
    while (L < more) {
        if (arrays[L] < num) {
            swap(arrays, ++less, L++);
        } else if (arrays[L] > num) {
            swap(arrays, --more, L);
        } else {
            L++;
        }
    }
    // return arrays;
    return [less+1, more-1];
}


/**
 * @function 用于交互数组中的指定位置的两个数
 * @param {*} arrays 
 * @param {*} si 
 * @param {*} sj 
 */
function swap(arrays, si, sj) {
    let tempdata = arrays[si];
    arrays[si] = arrays[sj];
    arrays[sj] = tempdata;
}

/**
 * @function 简化版 分两类问题, 左边是小于等于 num 的
 * @param {arrays} arrays 
 * @param {midnum} num 
 */
function singleArray(arrays, num) {
    if (arrays == null || arrays.length < 2) {
        return;
    }
    let left = -1;
    let current = 0;
    let arrLength = arrays.length;
    while (current < arrLength) {
        if (arrays[current] < num) {
            swap(arrays, ++left, current++);
        } else {
            current++;
        }
    }
    return arrays;
}

// let testArray = [-51, 50, -66, -22, 13, -16, 27, 74, -16, 38];
// console.log(testArray);
// console.log(singleArray(testArray,0));