/*
 * @Author: SkylineBin 
 * @Date: 2019-06-27 20:22:36 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-27 20:41:09
 */

/*****
 * 
 * 字符串按照字典序归一化
 * 
 * 
 */


function strDic(arr){
    if(!arr || arr.length === 0){
        return '';
    }
    let countArr=[];
    arr = arr.split('').sort().join('');
    for(let i=0;i<arr.length;i++){
        if(!countArr[arr[i]]){
            countArr[arr[i]]=1;
        }else {
            countArr[arr[i]]=countArr[arr[i]]+1;
        }
    }
    let backStr='';
    countArr = countArr.sort((a,b)=>a-b)
    for(let temp in countArr){
        backStr+= String(temp)+String(countArr[temp]);
    }
    return backStr;
}

let arr = 'abadbsedfrt';
// let arr = 'dabcab';
console.log(strDic(arr));

// 自测程序
// let datas = readline().split(' ');
// let arr = datas[0];
// print(strDic(arr));