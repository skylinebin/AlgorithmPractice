/**
 * @author SkylineBin
 * @time 2018-10-6
 * @function test BubbleSort
 * 
 * 
 */

const BubbleSort = require('./BubbleSort');
const SelectionSort = require('./SelectionSort');
const InsertionSort = require('./InsertionSort');
const MergeSort = require('./MergeSort');
const DutchFlagArray = require('./DultFlagArray');
const QuickSort = require('./QuickSort');

let arrone = [3,6,2,4,0,5,9];

console.log(arrone);

//  console.log('--------start BubbleSort-----------');

//  BubbleSort(arrone);

//  console.log('--------end BubbleSort-----------');


//  console.log('--------start SelectionSort-----------');

//  SelectionSort(arrone);

//  console.log('--------end SelectionSort-----------');

//   console.log('--------start InsertionSort-----------');

//   InsertionSort(arrone);

//   console.log('--------end InsertionSort-----------');

    // console.log('--------start MergeSort-----------');

    // MergeSort(arrone);

    // console.log('--------end MergeSort-----------');

    // console.log('--------start DutchFlagArray-----------');

    // DutchFlagArray(arrone, 0, 6 , 4);

    // console.log('--------end DutchFlagArray-----------');

    console.log('--------start QuickSort-----------');

    QuickSort(arrone);

    console.log('--------end QuickSort-----------');

console.log(arrone);