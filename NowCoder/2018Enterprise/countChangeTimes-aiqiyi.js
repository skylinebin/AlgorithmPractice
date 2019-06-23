/*
 * @Author: SkylineBin 
 * @Date: 2019-06-23 22:26:24 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-23 22:28:12
 */


function countChange(arr,n){
    if(arr.length !== n || n===0 || n===1){
        return 0;
    }
    let arrC = arr.slice(0);
    arrC = arrC.sort((a,b)=> a-b);
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== arrC[i]){
            count++;
        }
    }
    return count;
}

// 读取第一行有 n 个数
let initN = readline().split(" ");
let n = parseInt(initN[0]);

// 读取第二行并处理第二行的输入为整数数组
let datas = readline().split(" ");
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(parseInt(datas[i]));
}

print(countChange(arr,n))