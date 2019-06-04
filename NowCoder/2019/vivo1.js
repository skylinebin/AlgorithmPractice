/******
 * 
 * 
 * 从数组A中找数组B中不存在的数
 * 
 * 
 */


function solution(arr1, arr2) {
    var outputArr = []; //用于输出的结果数组
    if (arr1.length === 0 && arr2.length !== 0) {
        outputArr = arr1;
    } else if (arr1.length !== 0 && arr2.length === 0) {
        outputArr = arr2;
    } else if (arr1.length === 0 && arr2.length === 0) {
        outputArr = [];
    } else {
        arr2.sort((a, b) => {
            return a - b;
        })
        for (let i = 0; i < arr1.length; i++) {
            let state = false;
            for (let j = 0; j < arr2.length; j++) {
                if (arr2[j] === arr1[i]) {
                    state = true;
                }
            }
            if (!state) {
                outputArr.push(arr1[i]);
            }
        }

    }


}


