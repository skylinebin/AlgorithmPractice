/***
* 
* 
* 输入一个整数数组， 实现一个函数来调整该数组中数字的顺序，
* 使得所有的奇数位于数组的前半部分， 所有的偶数位于数组的后半部分，
* 并保证奇数和奇数， 偶数和偶数之间的相对位置不变。
* 
***/
// ! 本质涉及: 数组操作，排序，数组拼接
function reOrderArray(array) {
    let oddArr = [];
    let evenArr = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index]%2 !== 0) {
            oddArr.push(array[index]);
        }else {
            evenArr.push(array[index]);
        }        
    }
    return oddArr.concat(evenArr);
}

// Test Algorithm
var testNum = [2,3,4,5,6,7,0,9];
console.log(reOrderArray(testNum));