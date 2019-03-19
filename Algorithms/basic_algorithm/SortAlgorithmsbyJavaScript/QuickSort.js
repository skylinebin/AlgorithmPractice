/**
 * @author SkylineBin
 * @time 2019-03-18
 * @function create QuickSort by JavaScript
 *  实现改进形式的快速排序 (三类快排)
 * @Algorithm_bigO 
 *  O(N * log(N))
 * 
 */

module.exports = function QuickSort(arrays) {
    if (arrays == null || arrays.length < 2) {
        return;
    }
    // 处理 快排 的 过程
    quickSortProgress(arrays, 0, arrays.length - 1);
}

/**
 * @function 快速排序的实际执行过程,整个递归的执行条件是 Ln < Rn
 * @param {*} arrays 
 * @param {*} Ln 
 * @param {*} Rn 
 */
function quickSortProgress(arrays, Ln, Rn) {
    if (Ln < Rn) {
        // 添加随机快排的代码
        swap(arrays, Ln + parseInt(Math.random() * (Rn-Ln+1)), Rn);
        let p = partition(arrays, Ln, Rn);
        // console.log(p);
        quickSortProgress(arrays, Ln, p[0]-1);
        quickSortProgress(arrays, p[1]+1, Rn);
    }
}

/**
 * @function 对数组分三类的方法
 * @param {*} arrays 
 * @param {*} L 
 * @param {*} R 
 */
function partition(arrays, L, R) {
    let less = L - 1;
    let more = R;
    while (L < more) {
        if (arrays[L] < arrays[R]) {
            swap(arrays, ++less, L++);
        } else if (arrays[L] > arrays[R]) {
            swap(arrays, --more, L);
        } else {
            L++;
        }
    }
    swap(arrays, more, R); // 因为是和传过来的 arrays[R] 进行比较所以第一个 大于 arrays[R] 的数arrays[more] 要和 arrays[R] 交换
    // console.log(arrays);
    return [less + 1, more];
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