/**
 * @author SkylineBin
 * @time 2019-03-18
 * @function 使用大样本对常用的算法进行测试
 * 基于 对数器的思想
 * 
 * 
 */

const BubbleSort = require('./BubbleSort');
const SelectionSort = require('./SelectionSort');
const InsertionSort = require('./InsertionSort');
const MergeSort = require('./MergeSort');
const DutchFlagArray = require('./DultFlagArray');


// 生成指定长度和取值范围的数组  
function generateRandomArray(size, value) {
    let randomArrays = [];
    // 生成长度随机的数组  
    let arrayLength = parseInt((size + 1) * Math.random());
    for (let index = 0; index < arrayLength; index++) {
        randomArrays[index] = parseInt((value + 1) * Math.random()) - parseInt(value * Math.random());        
    }

    if (randomArrays.length === 0) {
        arrayLength = generateRandomArray(size, value);
    }

    return randomArrays;
}

// 复制两个一样的数组  
function copyArray(array){
    if (array === null) {
        return null;
    }
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {
        resultArray[index] = array[index];        
    }
    return resultArray;
}

// 判断两个数组是否相同  
function isEqual(arrone, arrtwo) {
    if ((arrone === null && arrtwo !== null) || (arrone !== null && arrtwo === null)) {
        return false;
    }
    if (arrone === null && arrtwo === null) {
        return true;
    }
    if (arrone.length !== arrtwo.length) {
        return false;
    }
    for (let index = 0; index < arrone.length; index++) {
        if (arrone[index] != arrtwo[index]) {
            return false;
        }        
    }
    return true;
}



let size = 10;
let value = 100;
let randomArrays = generateRandomArray(size, value);
let copyarray = copyArray(randomArrays);
console.log(randomArrays);

console.log("--------start Sort-----------");

// BubbleSort(randomArrays);
// SelectionSort(randomArrays);
// MergeSort(randomArrays);
InsertionSort(randomArrays);
console.log("--------after Sort-----------");
console.log(randomArrays);

console.log("--------system Sort-----------");
copyarray.sort(function (a, b) {
    return a - b;
});
console.log(copyarray);

console.log(isEqual(randomArrays, copyarray));

