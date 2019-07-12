/****
 * 
 * 
 * 一个整型数组里除了两个数字之外， 其他的数字都出现了两次。 请写程序找出这两个只出现一次的数字。
 * 
 * 
 */

function FindNumsAppearOnce(array) {
    let nums = [];
    for (let i = 0; i < array.length; i++) {
        if (nums[array[i]]) {
            nums[array[i]]++;
        }else {
            nums[array[i]] = 1;
        }
    }

    let list = [];
    for (let index in nums) {
        if (nums[index] === 1) {
            list.push(parseInt(index));
        }
    }
    return list;
}

let arr = [1,1,2,4,4,5,6,6,7,7,8,8];

console.log(FindNumsAppearOnce(arr));