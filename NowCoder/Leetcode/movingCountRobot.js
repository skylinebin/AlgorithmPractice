/*
 * @Author: SkylineBin 
 * @Date: 2019-05-15 19:42:12 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-15 20:39:34
 */

/*****
 * 
 * 地上有一个m行和n列的方格。 一个机器人从坐标0, 0 的格子开始移动， 
 * 每一次只能向左， 右， 上， 下四个方向移动一格， 但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如， 当k为18时， 机器人能够进入方格（ 35, 37）， 因为3 + 5 + 3 + 7 = 18。 
 * 但是， 它不能进入方格（ 35, 38）， 因为3 + 5 + 3 + 8 = 19。 
 * 
 * 请问该机器人能够达到多少个格子？
 * 
 * 
 */

function movingCount(threshold, rows, cols) {
    let countNum = 0;

    // 判断值相加是否超出边界 JavaScript 记得取整
    this.checkIfOutside = function(threshold, curRow, curCol){
        let tempCount = 0;
        while(curCol > 0 || curRow > 0){
            if (curCol > 0) {
                tempCount += curCol%10;
                curCol = parseInt(curCol / 10);
            }
            if (curRow > 0) {
                tempCount += curRow%10;
                curRow = parseInt(curRow / 10);
            }
        }
        // 超出边界返回 true
        if (tempCount > threshold) {
            return true;
        } else {
            return false;
        }
    }

    if ((rows ===0 && cols === 0) || threshold < 0) {
        return countNum;
    }

    if (threshold === 0){
        return 1;
    }

    // 用于记录是否遍历过该点
    let labelArr = [];
    for (let x = 0; x < rows; x++) {
        labelArr[x] = [];
        for (let y = 0; y < cols; y++) {
            labelArr[x][y] = 0;
        }
    }

    // dfs 搜索上下左右四个方向，使用 labelArr 标记位置是否遍历过
    this.explore = function (i, j, labelArr, rows, cols, threshold){
        if (i < 0 || i >= rows || j < 0 || j >= cols || this.checkIfOutside(threshold, i, j) || labelArr[i][j] === 1) {
            return 0;
        }
        labelArr[i][j] = 1;
        // console.log(i+','+j);
        return this.explore(i + 1, j, labelArr, rows, cols, threshold) 
                + this.explore(i - 1, j, labelArr, rows, cols, threshold)
                + this.explore(i, j+1, labelArr, rows, cols, threshold)
                + this.explore(i, j-1, labelArr, rows, cols, threshold)
                + 1;
    }
    countNum = this.explore(0, 0, labelArr, rows, cols, threshold);
    return countNum;
}

let threshold = 5;
let rows = 10;
let cols = 10;
console.log(movingCount(threshold, rows, cols));