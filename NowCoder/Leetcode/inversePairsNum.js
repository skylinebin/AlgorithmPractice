/*****
 * 
 * 求数组逆序对总数
 * 
 * 在数组中的两个数字， 如果前面一个数字大于后面的数字， 则这两个数字组成一个逆序对。 输入一个数组, 求出这个数组中的逆序对的总数P。 
 * 
 * 并将 P对 1000000007取模的结果输出。 即输出P % 1000000007
 * 
 * 
 */

// 解析：数组逆序对问题可以使用归并算法来解决

function InversePairs(data) {
    if (data === null || data.length < 2) {
        return;
    }

    let count = 0;
    this.sortProgress = function (arrays, Ln, Rn) {
        if (Ln == Rn) {
            return;
        }
        let midn = Ln + ((Rn - Ln) >> 1);
        sortProgress(arrays, Ln, midn);
        sortProgress(arrays, midn + 1, Rn);
        this.merge(arrays, Ln, midn, Rn);
    }

    this.merge = function (arrays, Ln, midn, Rn) {
        let temparrays = new Array();
        let ti = 0;
        let pone = Ln;
        let ptwo = midn + 1;
        while (pone <= midn && ptwo <= Rn) {
            // outside sort, insert it which is small than another
            if (arrays[pone] <= arrays[ptwo]) {
                temparrays[ti++] = arrays[pone++];
            } else {
                // 如果左边的有一个比 右边大，因为这样排序默认左边是从小到大排列，则此时有 midn - pone + 1 个数比 arrays[ptwo] 大
                count += midn - pone + 1;
                temparrays[ti++] = arrays[ptwo++];
            }
        }

        while (pone <= midn) {
            temparrays[ti++] = arrays[pone++];
        }

        while (ptwo <= Rn) {
            temparrays[ti++] = arrays[ptwo++];
        }

        for (let index = 0; index < temparrays.length; index++) {
            arrays[Ln + index] = temparrays[index];
        }
    }

    this.sortProgress(data, 0, data.length - 1);
    // console.log(data);
    return count % 1000000007;

}

// var data = [364, 637, 341, 406, 747, 995, 234, 971, 571, 219, 993, 407, 416, 366, 315, 301, 601, 650, 418, 355, 460, 505, 360, 965, 516, 648, 727, 667, 465, 849, 455, 181, 486, 149, 588, 233, 144, 174, 557, 67, 746, 550, 474, 162, 268, 142, 463, 221, 882, 576, 604, 739, 288, 569, 256, 936, 275, 401, 497, 82, 935, 983, 583, 523, 697, 478, 147, 795, 380, 973, 958, 115, 773, 870, 259, 655, 446, 863, 735, 784, 3, 671, 433, 630, 425, 930, 64, 266, 235, 187, 284, 665, 874, 80, 45, 848, 38, 811, 267, 575];
var data = [1, 2, 3, 4, 5, 6, 7, 0];

console.log(InversePairs(data));
