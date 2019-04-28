/******
 * 
 * 
 * 将正方形矩阵顺时针旋转 90 度
 * 
 * 主要是明白 外面的一个框怎么旋转
 * 
 */

function rotateSquareMatrix(matrix) {
    var lr = 0;
    var lc = 0;
    var rr = matrix.length - 1;
    var rc = matrix[0].length - 1;

    this.rotateEdge = function (matrix, tlr, tlc, trr, trc){
        var allnum = trr - tlr;
        var tempdata = 0;
        for (let i = 0; i < allnum; i++) {
            tempdata = matrix[tlr][tlc + i];
            matrix[tlr][tlc + i] = matrix[trr - i][tlc];
            matrix[trr - i][tlc] = matrix[trr][trc - i];
            matrix[trr][trc - i] = matrix[tlr + i][trc];
            matrix[tlr + i][trc] = tempdata;
        }
    }

    while (lr < rr){
        this.rotateEdge(matrix, lr++, lc++, rr--, rc--);
    }

    return matrix;
}


var matrix = [];
matrix[0] = [1, 2, 3, 4];
matrix[1] = [5, 6, 7, 8];
matrix[2] = [9, 10, 11, 12];
matrix[3] = [13, 14, 15, 16];

console.log(rotateSquareMatrix(matrix));