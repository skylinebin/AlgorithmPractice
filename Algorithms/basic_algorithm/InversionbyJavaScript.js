/****
 * 
 * @author SkylineBin
 * @time 2018-10-7
 * @function print all inversions of one array by JavaScript
 * 
 */

function printInversion(arrays) {
    if (arrays == null || arrays.length <2){
        return '';
    }
    return processInversion(arrays, 0, arrays.length - 1);
}

function processInversion(arrays, ln, rn) {
    if (ln == rn) {
        return '';
    }
    let midn = ln + ((rn - ln) >> 1);
    return String(processInversion(arrays, ln, midn)) + String(processInversion(arrays, midn + 1, rn)) + String(outallInversion(arrays, ln, midn, rn));
}

function outallInversion(arrays, ln, midn, rn) {
        let temparrays = new Array();
        let ti = 0;
        let pone = ln;
        let ptwo = midn + 1;
        let resultsum = '';
        while (pone <= midn && ptwo <= rn) {
            // outside sort, insert it which is small than another
            resultsum += arrays[pone] > arrays[ptwo] ? String(String(arrays[pone])+'_'+String(arrays[ptwo])+"#") : '';
            // temparrays[ti++] = arrays[pone] > arrays[ptwo] ? arrays[ptwo++] : arrays[pone++];
            temparrays[ti++] = arrays[pone] > arrays[ptwo] ? arrays[pone++] : arrays[ptwo++];
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


//  let testArrays = [1, 3, 4, 2, 5];
 let testArrays = [3, 1, 2, 4, 0, 7, 5];
 console.log('this array is: ' + testArrays);
 console.log('the small sum of this array is: ' + printInversion(testArrays));