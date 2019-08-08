/******
 * 
 * 
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 * 
 * 
 */

function MoreThanHalfNum_Solution(numbers) {
    // write code here
    if (numbers.length <=0) {
        return null;
    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    var countArr = [];
    for (let i = 0; i < numbers.length; i++) {
        // countArr[numbers[i]] = countArr[numbers[i]]+1 || 1;
        if (countArr[numbers[i]]) {
            countArr[numbers[i]] = countArr[numbers[i]] + 1;
            if (countArr[numbers[i]] > numbers.length/2) {
                return numbers[i];
            } 
        } else {
            countArr[numbers[i]] = 1;
        }
    }
    return 0;
}

let numbers = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(MoreThanHalfNum_Solution(numbers));