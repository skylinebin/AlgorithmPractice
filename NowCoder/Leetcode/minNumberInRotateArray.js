/****
 * 
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *  输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 *  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * 
 */

function minNumberInRotateArray(rotateArray)
{
    // write code here
    var len = rotateArray.length;
    var minNum = 0;
    if (len <= 0) {
        return 0;
    } else {
        if (rotateArray[0] < rotateArray[len-1]) {
            minNum = rotateArray[0];
            for (var index = 0; index < len; index++) {
                if (rotateArray[index] <= minNum) {
                    minNum = rotateArray[index];
                }
            }
        } else {
            minNum = rotateArray[len-1];
            for (var index = len -1; index >= 0; index--) {
                if (rotateArray[index] <= minNum) {
                    minNum = rotateArray[index];
                }
            }
        }
        return minNum;
    }
}

var rotateArray = [4,5,6,2,3];
console.log(minNumberInRotateArray(rotateArray));