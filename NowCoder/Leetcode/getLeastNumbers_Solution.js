/******
 * 
 * 输入n个整数， 找出其中最小的K个数。 
 * 
 * 例如输入4, 5, 1, 6, 2, 7, 3, 8 这8个数字， 则最小的4个数字是1, 2, 3, 4, 。
 * 
 * 
 */

// 基础方法实现

function GetLeastNumbers_Solution(input, k) {
    if (input === null) {
        return [];
    }
    if (input.length < k) {
        return [];
    }
    let output = [];
    input.sort(function(a,b){
        return a - b;
    })
    for (let i = 0; i < k; i++) {
        output.push(input[i]);
    }
    return output;
}

let arr = [4, 5, 1, 6, 2, 7, 3, 8];
console.log(GetLeastNumbers_Solution(arr, 8));

// 快速排序方法待补充



// 堆排序方法可以尝试
