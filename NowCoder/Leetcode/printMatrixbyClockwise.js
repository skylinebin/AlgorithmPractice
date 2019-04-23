/******
 * 
 * 顺时针打印矩阵
 * 
 * 输入一个矩阵， 按照从外向里以顺时针的顺序依次打印出每一个数字， 
 * 例如， 如果输入如下4 X 4 矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
 * 则依次打印出数字1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
 * 
 */

function printMatrix(matrix) {
    // write code here
    // 设想为 n*m 的 矩阵
    var nlen = matrix.length;
    var mlen = matrix[0].length;
    var output = [];
    if (mlen === 0 || nlen === 0) {
        return output;
    }
    var top=0,left=0,right=mlen-1,bottom=nlen-1;
    // 转圈圈的循环条件
    while(top<=bottom && left <= right){

        // 从 左上到右上
        for (let i = left; i <=right; i++) {
            output.push(matrix[top][i]);
        }
        // 从右上到右下
        for (let i = top+1; i <=bottom; i++) {
            output.push(matrix[i][right]);
        }
        // 从右下到左下
        for (let j = right-1; j >=left && top < bottom; j--) {
            output.push(matrix[bottom][j]);
        }
        // 从左下到左上
        for (let j = bottom - 1; j > top && right > left; j--) {
            output.push(matrix[j][left]);
        }
        top++;
        left++;
        bottom--;
        right--;
    }

    return output;
}

var matrix = [];
// matrix[0] = [1,2,3,4];
// matrix[1] = [5,6,7,8];
// matrix[2] = [9,10,11,12];
// matrix[3] = [13,14,15,16];
matrix[0] = [1,2];
matrix[1] = [3,4];
matrix[2] = [5,6];
matrix[3] = [7,8];

console.log(printMatrix(matrix));