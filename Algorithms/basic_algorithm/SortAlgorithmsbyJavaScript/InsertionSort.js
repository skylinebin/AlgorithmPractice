/**
 * @author SkylineBin
 * @time 2018-10-6
 * @function create InsertionSort by JavaScript
 * 实现插入排序
 * @Algorithm_bigO 
 *  best_bigO = O(N)
 *  worst_bigO = O(N^2) 
 * 
 */

module.exports = function InsertionSort(arrays) {
    if (arrays == null || arrays.length < 2) {
        return;
    }
    for (let i = 1; i < arrays.length; i++) {
        for (let j = i - 1; j >= 0 && arrays[j] > arrays[j + 1]; j--) {
            swap(arrays, j, j+1);
            console.log(arrays);            
        }
        
    }
}

function swap(arrays, si, sj) {
    let tempdata = arrays[si];
    arrays[si] = arrays[sj];
    arrays[sj] = tempdata;
}