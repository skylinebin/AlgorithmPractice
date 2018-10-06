/**
 * @author SkylineBin
 * @time 2018-10-6
 * @function use javascript to bubble sort arrays
 * 
 * 
 */

 module.exports = function BubbleSort(arrays){
    if(arrays == null || arrays.length < 2){
        return;
    }
    for (let index = arrays.length - 1; index > 0; index--) {
        for (let i = 0; i < index; i++) {
            if (arrays[i] > arrays[i+1]) {
                swap(arrays, i, i+1);
                console.log(arrays);
            }  
        }
        
    }
 }

 function swap(arrays, si, sj){
    let tempdata = arrays[si];
    arrays[si] = arrays[sj];
    arrays[sj] = tempdata;
 }