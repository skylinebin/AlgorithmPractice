/**
 * @author SkylineBin
 * @time 2019-03-20
 * @function create HeapSort by JavaScript
 *  实现堆排序
 * @Algorithm_bigO 
 *  O(N * log(N))
 * 
 */

module.exports = function HeapSort(arrays) {
    if (arrays == null || arrays.length < 2) {
        return;
    }
    // 处理 快排 的 过程
    for (let index = 0; index < arrays.length; index++) {
        heapInsert(arrays, index);
    }
    let heapSize = arrays.length;
    swap(arrays, 0, --heapSize);
    while (heapSize > 0) {
        heapify(arrays, 0, heapSize);
        swap(arrays, 0, --heapSize);
    }
    
}

/**
 * @function 将一个数组调整成大根堆结构
 * @param {*} arrays 
 * @param {*} index 
 */
function heapInsert(arrays, index) {
    // 要使用 parseInt,要不然会出错
    while (arrays[index] > arrays[parseInt((index-1)/2)]) {
        swap(arrays, index, parseInt((index - 1) / 2));
        index = parseInt((index - 1) / 2);
    }
}

/**
 * @function  index位置的数变小后进行往下沉处理，直到形成新的大根堆
 * @param {*} arrays 
 * @param {*} index 
 * @param {*} heapSize 
 */
function heapify(arrays, index, heapSize){
    let left = index * 2 + 1;
    while (left < heapSize) {
        let largest = ((left + 1) < heapSize) && arrays[left+1] > arrays[left]  ? left + 1 : left;
        largest = arrays[largest] > arrays[index] ? largest : index;
        if (largest === index) {
            break;
        }
        swap(arrays, index, largest);
        index = largest;
        left = index * 2 + 1;
    }
}

/**
 * @function 用于交互数组中的指定位置的两个数
 * @param {*} arrays 
 * @param {*} si 
 * @param {*} sj 
 */
function swap(arrays, si, sj) {
    let tempdata = arrays[si];
    arrays[si] = arrays[sj];
    arrays[sj] = tempdata;
}