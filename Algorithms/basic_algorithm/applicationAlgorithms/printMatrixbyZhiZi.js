/******
 * 
 * 之字形打印矩阵
 * 
 * 
 * 
 */

// ! 解题思路：从宏观来看，可转换成已知矩阵右上与左下两点，打印对角线上的数
// A,B 两点 A 向右走，遇到边向下走
// B 点向下走，遇到边向右走

function printMatrixbyZhiZi(matrix){
    var lr = 0;
    var lc = 0;
    var rr = matrix.length-1;
    var rc = matrix[0].length-1;
    var a = [lr,lc];
    var b = [lr,lc];

    var output = [];
    var rttolb = true; // 用来标记是从右上向左下打印(true)，还是从左下向右上打印(false)


    this.printDiagonal = function (matrix, trr,trc,tlr,tlc, rtol) {
        if (rtol) {
            // 从 右上 到 左下 打印
            while (tlc <= trc && trr <= tlr) {
                output.push(matrix[trr][trc]);
                trr++;
                trc--;
            }
        } else {
            // 从 左下 到 右上 打印
            while (tlc <= trc && trr <= tlr) {
                output.push(matrix[tlr][tlc]);
                tlr--;
                tlc++;
            }
        }
    }

    this.printDiagonal(matrix, a[0], a[1], b[0], b[1], rttolb);
    while (a[0] !== rr) {
        rttolb = !rttolb;
        if (a[1] < rc) {
            a[1] = a[1]+1;
        } else if(a[1]===rc && a[0] < rr){
            a[0] = a[0] + 1;
        }

        if (b[0] < rr) {
            b[0] = b[0] + 1;
        } else if (b[0] === rr && b[1] < rc){
            b[1] = b[1] + 1;
        }
        this.printDiagonal(matrix, a[0], a[1], b[0], b[1], rttolb);
        // if (a[0] === rr && a[1] === rc) {
        //     break;
        // }
    }
    return output;

}

var matrix = [];
matrix[0] = [1, 2, 3, 4];
matrix[1] = [5, 6, 7, 8];
matrix[2] = [9, 10, 11, 12];
matrix[3] = [13, 14, 15, 16];

console.log(printMatrixbyZhiZi(matrix));


// 简洁版本的写法
function printMatrixbyZhiZi2(matrix) {
    var ar = 0;
    var ac = 0;
    var br = 0;
    var bc = 0;
    var endr = matrix.length - 1;
    var endc = matrix[0].length - 1;


    var output = [];
    var rttolb = true; // 用来标记是从右上向左下打印(true)，还是从左下向右上打印(false)


    this.printDiagonal = function (matrix, trr, trc, tlr, tlc, rtol) {
        if (rtol) {
            // 从 右上 到 左下 打印
            while (tlc <= trc && trr <= tlr) {
                output.push(matrix[trr][trc]);
                trr++;
                trc--;
            }
        } else {
            // 从 左下 到 右上 打印
            while (tlc <= trc && trr <= tlr) {
                output.push(matrix[tlr][tlc]);
                tlr--;
                tlc++;
            }
        }
    }

    while(ar !== endr + 1){
        this.printDiagonal(matrix, ar, ac, br, bc, rttolb);
        ar = ac === endc ? ar + 1 : ar;
        ac = ac === endc ? ac : ac + 1;
        bc = br === endr ? bc + 1 : bc;
        br = br === endc ? br : br + 1;
        rttolb = !rttolb;
    }

    return output;
}

console.log(printMatrixbyZhiZi2(matrix));