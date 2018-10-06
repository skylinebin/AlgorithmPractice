/**
 * @author SkylineBin
 * @time 2018-10-6
 * @function use javascript to create SelectionSort
 * 
 */

module.exports = function SelectionSort(arrays){
    if (arrays == null || arrays.length < 2) {
        return;
    }
    for (let index = 0; index < arrays.length - 1; index++) {
        let minIndex = index;
        for (let j = index + 1; j < arrays.length; j++) {
            minIndex = arrays[j] < arrays[minIndex] ? j : minIndex;            
        }
        swap(arrays, index, minIndex);
        console.log(arrays);
    }
}

 function swap(arrays, si, sj) {
     let tempdata = arrays[si];
     arrays[si] = arrays[sj];
     arrays[sj] = tempdata;
 }