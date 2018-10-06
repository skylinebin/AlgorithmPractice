/**
 * @author SkylineBin
 * @time 2018-10-6
 * @function test BubbleSort
 * 
 * 
 */

 const BubbleSort = require('./BubbleSort');
 const SelectionSort = require('./SelectionSort');

 let arrone = [3,6,2,4,0,5,9];

 console.log(arrone);

//  console.log('--------start BubbleSort-----------');

//  BubbleSort(arrone);

//  console.log('--------end BubbleSort-----------');


 console.log('--------start SelectionSort-----------');

 SelectionSort(arrone);

 console.log('--------end SelectionSort-----------');


 console.log(arrone);