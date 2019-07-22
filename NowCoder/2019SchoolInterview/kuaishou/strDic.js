/*
 * @Author: SkylineBin 
 * @Date: 2019-07-22 14:28:59 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-22 14:30:17
 */


/*****
 * 
 * 字符串归一化
 * 
 * 通过键盘输入一串小写字母(a~z)组成的字符串。
 * 请编写一个字符串归一化程序，统计字符串中相同字符出现的次数，并按字典序输出字符及其出现次数。 
 * 例如字符串"babcc"归一化后为"a1b2c2"
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

let datas = readline().split(' ');
let arr = datas[0];
print(strDic(arr));