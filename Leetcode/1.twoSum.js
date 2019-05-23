/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numArray = new Array();
    if (nums.length <= 0) {
        return numArray;
    } else {
        for (var index = 0; index < nums.length; index++) {
            if (index < nums.length -1) {
                for (var indexj = index+1; indexj < nums.length; indexj++) {
                    if (nums[index] + nums[indexj] == target) {
                        numArray.push(index);
                        numArray.push(indexj);
                        return numArray;
                    }
                }
            }
        }
    } 
};

var testArray = [-1, -2, -3, -4, -5];
var testTarget = -8;
console.log(twoSum(testArray,testTarget));
console.log(twoSum(testArray,testTarget).length);