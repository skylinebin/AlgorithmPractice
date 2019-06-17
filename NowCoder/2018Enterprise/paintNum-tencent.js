/*
 * @Author: SkylineBin 
 * @Date: 2019-06-17 20:24:14 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-17 21:21:38
 */


function countPaintNum(numN, numM, str){
    let count = 0;
    let strC = [];
    for (let index = 0; index < numN; index++) {
        strC[index] = [];
        let tempData = str[index];
        for (let j = 0; j < numM; j++) {
            strC[index][j] = tempData[j];
        }
    }
    // console.log(strC);

    this.dfs_B = function (x, y, strC){
        x = parseInt(x);
        y = parseInt(y);
        if(x >= 0 && x < numN && y >= 0 && y < numM && (strC[x][y] === 'B' || strC[x][y] === 'G')){
            if (strC[x][y] === 'G') {
                strC[x][y] = 'Y';
            } else {
                strC[x][y] = 'X';
            }
            this.dfs_B(x + 1, y - 1, strC);
            this.dfs_B(x - 1, y + 1, strC);
        }
        return;
    }
    this.dfs_Y = function (x, y, strC){
        x = parseInt(x);
        y = parseInt(y);
        if(x >= 0 && x < numN && y >= 0 && y < numM && (strC[x][y] === 'Y' || strC[x][y] === 'G')){
            if (strC[x][y] === 'G') {
                strC[x][y] = 'B';
            } else {
                strC[x][y] = 'X';
            }
            this.dfs_Y(x - 1, y - 1, strC);
            this.dfs_Y(x + 1, y + 1, strC);
        }
        return;
    }

    for (let i = 0; i < numN; i++) {
        for (let j = 0; j < numM; j++) {
            if (strC[i][j] === 'Y') {
                this.dfs_Y(i,j, strC);
                count++;
            } else if(strC[i][j] === 'B'){
                this.dfs_B(i, j, strC);
                count++;
            }else if (strC[i][j] === 'G'){
                this.dfs_Y(i, j, strC);
                // strC[i][j] = 'B';
                this.dfs_B(i, j, strC);
                count += 2;
            }
        }
    }

    return count;
}

let numM = 4;
let numN = 4;
let str = ['YXXB','XYGX','XBYY','BXXY'];
console.log(countPaintNum(numN, numM, str));