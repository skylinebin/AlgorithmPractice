/***
* 
* 输入一个递增排序的数组和一个数字S， 在数组中查找两个数,
* 使得他们的和正好是S， 如果有多对数字的和等于S， 
* 输出两个数的乘积最小的。
* 
* 
***/
// ! 本质涉及: 排序算法

// ! 和均为S的两个数，乘积最小的数在递增序列的两侧

function FindNumbersWithSum(array, sum) {
    // write code here
    let result = [];
    if (array.length <= 1) {
        return result;
    }
    let i = 0;
    let j = array.length -1;
    while(i < j){
        if (array[i] + array[j] === sum) {
            result.push(array[i]);
            result.push(array[j]);
            break;
        } else if (array[i] + array[j] < sum) {
            i++;
        } else {
            j--;
        }
    }
    return result;
}

// Test Algorithm
var testNum = [1,2,3,4,5,6,7,8,9,10];
console.log(FindNumbersWithSum(testNum, 9));