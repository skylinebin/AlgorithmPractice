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
    return arrays;
}

function swap(arrays, si, sj) {
    let tempdata = arrays[si];
    arrays[si] = arrays[sj];
    arrays[sj] = tempdata;
}