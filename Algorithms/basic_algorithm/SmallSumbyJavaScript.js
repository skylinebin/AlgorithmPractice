/*****
 * 
 * @author SkylineBin
 * @time 2018-10-6
 * @function use mergesort to caculate small sum of one array
 * 使用归并排序去计算一个数组中的最小值
 * 
 */


function smallSum(arrays) {
if (arrays == null || arrays.length < 2) {
    return 0;
}
    return camergeSort(arrays, 0, arrays.length -1);
}

function camergeSort(arrays, ln, rn) {
    if (ln == rn) {
        return 0;
    }
    let midn = ln + ((rn - ln) >> 1);
    return camergeSort(arrays, ln, midn) + camergeSort(arrays, midn + 1, rn) + caMerge(arrays, ln, midn, rn);
}

function caMerge(arrays, ln, midn, rn){
    let temparrays = new Array();
    let ti = 0;
    let pone = ln;
    let ptwo = midn + 1;
    let resultsum = 0;
    while (pone <= midn && ptwo <= rn) {
        // outside sort, insert it which is small than another
        resultsum += arrays[pone] < arrays[ptwo] ? (rn - ptwo + 1) * arrays[pone] : 0;
        temparrays[ti++] = arrays[pone] < arrays[ptwo] ? arrays[pone++] : arrays[ptwo++];
    }

    while (pone <= midn) {
        temparrays[ti++] = arrays[pone++];
    }

    while (ptwo <= rn) {
        temparrays[ti++] = arrays[ptwo++];
    }

    for (let index = 0; index < temparrays.length; index++) {
        arrays[ln + index] = temparrays[index];
    }
    return resultsum;
}


let testArrays = [1, 3, 4, 2, 5];
console.log('this array is: '+ testArrays);
console.log('the small sum of this array is: ' + smallSum(testArrays));