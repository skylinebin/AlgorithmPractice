/*
 * @Author: SkylineBin 
 * @Date: 2019-05-17 08:54:32 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-17 09:35:20
 */

/*******
 * 
 * 
 * 如何得到一个数据流中的中位数？ 如果从数据流中读出奇数个数值， 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值， 那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert() 方法读取数据流， 使用GetMedian() 方法获取当前读取数据的中位数。
 * 
 * 
 * 
 */

let littleHeap = [];
let bigHeap = [];

// 使用完全二叉树的思想实现 
// 大根堆 和 小根堆

function Insert(num) {
    if (bigHeap.length === 0) {
        bigHeap.push(num);
    }else {
        if (num <= bigHeap[0]) {
            bigHeap.push(num);
        } else {
            littleHeap.push(num);
        }
    }



    // 将堆调整成大根堆 用于存较小那部分数字
    this.heapBigSort = function(arrays) {

        for (let index = 0; index < arrays.length; index++) {
            while (arrays[index] > arrays[parseInt((index - 1) / 2)]) {
                this.swap(arrays, index, parseInt((index - 1) / 2));
                index = parseInt((index - 1) / 2);
            }
        }

    }

    // 将堆调整成小根堆 用于存较大那部分数
    this.heapLittleSort = function(arrays) {
        for (let index = 0; index < arrays.length; index++) {
            while (arrays[index] < arrays[parseInt((index - 1) / 2)]) {
                this.swap(arrays, index, parseInt((index - 1) / 2));
                index = parseInt((index - 1) / 2);
            }
        }
    }

    this.swap = function (arrays, si, sj) {
        let tempdata = arrays[si];
        arrays[si] = arrays[sj];
        arrays[sj] = tempdata;
    }

    if (bigHeap.length - littleHeap.length > 1) {
        let tempNode = bigHeap[0];
        bigHeap = bigHeap.slice(1);
        littleHeap.push(tempNode);
    } else if (littleHeap.length - bigHeap.length > 1) {
        let tempNode = littleHeap[0];
        littleHeap = littleHeap.slice(1);
        bigHeap.push(tempNode);
    }
    this.heapBigSort(bigHeap);
    this.heapLittleSort(littleHeap);
}

function GetMedian() {
    let midnum = null;
    if (bigHeap.length===0 && littleHeap.length === 0) {
        return midnum;
    }
    if (bigHeap.length > littleHeap.length) {
        midnum = bigHeap[0];
    } else if(littleHeap.length > bigHeap.length) {
        midnum = littleHeap[0];
    } else {
        // midnum = parseInt((bigHeap[0] + littleHeap[0])/2);
        midnum = (bigHeap[0] + littleHeap[0])/2;
    } 
    return midnum;
}


Insert(1);
Insert(2);
console.log(GetMedian());
Insert(3);
Insert(4);
console.log(GetMedian());
Insert(5);
console.log(GetMedian());
Insert(6);
