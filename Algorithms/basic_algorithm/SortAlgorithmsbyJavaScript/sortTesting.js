/*
 * @Author: SkylineBin 
 * @Date: 2019-06-03 20:33:20 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-14 14:18:02
 */


const BubbleSort = require('./BubbleSort');
const SelectionSort = require('./SelectionSort');
const InsertionSort = require('./InsertionSort');
const MergeSort = require('./MergeSort');
const DutchFlagArray = require('./DultFlagArray');
const QuickSort = require('./QuickSort');
const HeapSort = require('./HeapSort');


let arrOne = [38,65,97,76,13,27,10];

BubbleSort(arrOne);



function quickSort(arr){
    if(arr === null || arr.length < 2){
        return arr;
    }

    return quickSortProcess(arr, 0, arr.length-1);
}

function quickSortProcess(arr, Ln, Rn){
    if(Ln < Rn){
        swap(arr, Ln+parseInt(Math.random()*(Rn-Ln+1)),Rn);
        let p = partition(arr, Ln, Rn);
        quickSortProcess(arr, Ln, p[0]-1);
        quickSortProcess(arr, p[1]+1, Rn);
    }
}

function swap(arr, i,j){
    let tempData = arr[i];
    arr[i] = arr[j];
    arr[j] = tempData;
}

// 对传入的每一部分进行分区域，并返回中间等于R的边界范围  
function partition(arr, L, R){
    let less = L-1;
    let more = R;
    while(L < more){
        if(arr[L] < arr[R]){
            swap(arr, ++less, L++);
        }else if(arr[L]>arr[R]){
            swap(arr,--more,L);
        } else {
            L++;
        }
    }
    swap(arr, more, R);
    return [less+1, more];

}

