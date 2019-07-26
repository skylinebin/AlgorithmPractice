/*
 * @Author: SkylineBin 
 * @Date: 2019-07-26 19:48:52 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-26 19:50:42
 */


/*****
 * 
 * 
 * 两两配对差值最小
 * 
 * 给定一个长度为偶数的数组arr，将该数组中的数字两两配对并求和，在这些和中选出最大和最小值，
 * 请问该如何两两配对，才能让最大值和最小值的差值最小？
 * 
 * 输入描述：  
 * 一共2行输入。
 * 第一行为一个整数n，2<=n<=10000, 第二行为n个数，组成目标数组，每个数大于等于2，小于等于100。
 * 
 * 输出描述：  
 * 输出最小的差值。
 * 
 * 
 * 输入：
 * 4 
 * 2 6 4 3
 * 
 * 输出：  
 * 1
 * 
 */

function findMinDec(datas){
    let min = Number.MAX_SAFE_INTEGER,max=0;
    let len = datas.length;
    datas.sort((a,b)=>a-b);
    let store,sum;
    let i=0,j=datas.length-1;
    while(i<j){
        sum = datas[i]+datas[j];
        min = Math.min(min,sum);
        max = Math.max(max,sum);
        i++;
        j--;
    }
    return max-min;
}



let initData = readline().split(' ');
let numN = parseInt(initData[0]);

let data = readline().split(' ');
let datas = [];
for(let i=0;i<numN;i++){
    datas.push(parseInt(data[i]));
}

print(findMinDec(datas));


