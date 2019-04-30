/*****
 * 
 * 统计一个数字在排序数组中出现的次数。
 * 
 * 
 */

function GetNumberOfK(data, k) {
    // write code here
    if (data.length === 0) {
        return 0;
    }
    let dataLen = data.length;

    // 使用二分查找的方法确定 数组的首位
    this.getNumLeft = function(data, k, ln, rn){
        if (ln > rn) {
            return -1;
        }
        let midn = (rn + ln) >> 1;
        if (data[midn] > k) {
            return this.getNumLeft(data, k, ln, midn - 1);
        } else if(data[midn] < k) {
            return this.getNumLeft(data, k, midn + 1, rn);
        } else if (midn-1 >= ln && data[midn-1] === k) {
            return this.getNumLeft(data, k, ln, midn - 1);
        } else {
            return midn;
        }
    }

    // 左侧二分查找的非递归写法 
    this.getNumLeftNonrecurrent = function (data, k, ln, rn) {
        if (ln > rn) {
            return -1;
        }
        let midn = (ln + rn) >> 1;
        while (ln <= rn) {
            if (data[midn] > k) {
                rn = midn - 1;
            } else if (data[midn] < k) {
                ln = midn + 1;
            } else if (midn - 1 >= ln && data[midn - 1] === k) {
                rn = midn - 1;
            } else {
                return midn;
            }
            midn = (ln + rn) >> 1;
        }
        return -1;
    }

    this.getNumRight = function (data, k, ln, rn) {
        if (ln > rn) {
            return -1;
        }
        let midn = (rn + ln) >> 1;
        if (data[midn] > k) {
            return this.getNumRight(data, k, ln, midn - 1);
        } else if (data[midn] < k) {
            return this.getNumRight(data, k, midn + 1, rn);
        } else if (midn+1 <= rn && data[midn + 1] === k) {
            return this.getNumRight(data, k, midn + 1, rn);
        } else {
            return midn;
        }
    }

    // 二分查找的非递归写法 
    this.getNumRightNonrecurrent = function (data, k, ln, rn) {
        if (ln > rn){
            return -1;
        }
        let midn = (ln + rn) >> 1;
        let end = data.length - 1;
        while(ln <= rn){
            if (data[midn] > k) {
                rn = midn - 1;
            } else if (data[midn] < k) {
                ln = midn + 1;
            } else if (midn + 1 <= rn && data[midn + 1] === k){
                ln = midn + 1;
            } else {
                return midn;
            }
            midn = (ln + rn) >> 1;
        }
        return -1;
    }


    let left = this.getNumLeft(data, k, 0, dataLen - 1);
    let right = this.getNumRight(data, k, 0, dataLen - 1);
    // let left = this.getNumLeftNonrecurrent(data, k, 0, dataLen - 1);
    // let right = this.getNumRightNonrecurrent(data, k, 0, dataLen - 1);
    if (left >= 0 && right <= dataLen-1) {
        return right - left + 1;
    }
    return 0;

}

let data = [1,2,3,3,3,3,3,3,4,5,6,7,8];
let data2 = [3,3,3,3,3,3,3,3,3,3,3,3,3];
let k = 3;
console.log(GetNumberOfK(data, k));