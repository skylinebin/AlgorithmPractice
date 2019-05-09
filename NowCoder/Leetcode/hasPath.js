/*
 * @Author: SkylineBin
 * @Date: 2019-05-09 20:36:43 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-09 21:20:49
 */

/****
 * 
 * 请设计一个函数， 用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。 
 * 路径可以从矩阵中的任意一个格子开始， 每一步可以在矩阵中向左， 向右， 向上， 向下移动一个格子。 
 * 如果一条路径经过了矩阵中的某一个格子， 则之后不能再次进入这个格子。
 *  例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串 "bcced"的路径， 但是矩阵中不包含 "abcb"路径， 
 * 因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后， 路径不能再次进入该格子。
 * 
 * 
 * 
 */

// matrix 是一个一维数组

function hasPath(matrix, rows, cols, path) {
    
    // 使用回溯法完成矩阵的搜索
    // k 表示path 中的第 k 个字符 staMatrix[currentIndex] === 1 表示该位置已经被访问过
    this.checkIfMeet = function (matrix, rows, cols, i, j, k, pathStr, staMatrix) {
        let currentIndex = i * cols + j;
        if (i < 0 || i >= rows || j < 0 || j >= cols || staMatrix[currentIndex] === 1 || matrix[currentIndex] !== pathStr[k]) {
            return false;
        }
        if (k === pathStr.length-1) {
            return true;
        }
        // 第一个判断没有返回说明当前字符是属于 path 中的，并且不是最后一个字符(第二个if)
        staMatrix[currentIndex] = 1; // 将此状态设置成 1 说明这个点匹配上了并且访问过了这个点
        let nextPathNode = k + 1;
        // 对这个点的上下左右四个点进行回溯
        if (this.checkIfMeet(matrix, rows, cols, i + 1, j, nextPathNode, pathStr, staMatrix) ||
            this.checkIfMeet(matrix, rows, cols, i, j + 1, nextPathNode, pathStr, staMatrix) ||
            this.checkIfMeet(matrix, rows, cols, i - 1, j, nextPathNode, pathStr, staMatrix) ||
            this.checkIfMeet(matrix, rows, cols, i, j - 1, nextPathNode, pathStr, staMatrix)
        ) {
            return true;
        }
        staMatrix[currentIndex] = 0;
        return false;
    }
    
    // 使用状态矩阵来保存访问过的有效值
    let stateMatrix = [];
    // 遍历整个矩阵直到找到第一个匹配字符串的字符 然后调用方法进行回溯
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (this.checkIfMeet(matrix, rows, cols, i, j, 0, path, stateMatrix)) {
                return true;
            }
        }
    }
    return false;
}

let matrix = 'abcesfcsadee';
let rows = 3;
let cols = 4;
let path = 'bcced';
let path2 = 'abcb';
console.log(hasPath(matrix, rows, cols, path));
console.log(hasPath(matrix, rows, cols, path2));

