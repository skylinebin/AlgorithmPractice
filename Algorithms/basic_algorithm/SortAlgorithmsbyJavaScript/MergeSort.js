/**
 * @author SkylineBin
 * @time 2018-10-6
 * @function create MergeSort by JavaScript
 * 归并排序
 * @Algorithm_bigO 
 *  O(N * log(N))
 * 
 */

module.exports = function MergeSort(arrays) {
    if (arrays == null || arrays.length < 2) {
        return;
    }
    // Recursive process
    sortProgress(arrays, 0, arrays.length - 1);
}

function sortProgress(arrays, Ln, Rn) {
    if (Ln == Rn){
        return;
    }
    let midn = Ln + ((Rn - Ln) >> 1);
    sortProgress(arrays, Ln, midn);
    sortProgress(arrays, midn + 1, Rn);
    merge(arrays, Ln, midn, Rn);
    console.log(arrays);
}

function merge(arrays, Ln, midn, Rn) {
    let temparrays = new Array();
    let ti = 0;
    let pone = Ln;
    let ptwo = midn + 1;
    while (pone <= midn && ptwo <= Rn) {
        // outside sort, insert it which is small than another
        temparrays[ti++] = arrays[pone] < arrays[ptwo] ? arrays[pone++] : arrays[ptwo++];
    }

    while (pone <= midn) {
        temparrays[ti++] = arrays[pone++];
    }

    while (ptwo <= Rn) {
        temparrays[ti++] = arrays[ptwo++];
    }

    for (let index = 0; index < temparrays.length; index++) {
        arrays[Ln + index] = temparrays[index];
    }
}