/*
 * @Author: SkylineBin 
 * @Date: 2019-08-07 10:39:50 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-13 10:24:56
 */


/****
 * 
 * 题目描述：给定一个由小写字母组成的字符串s，请将其分割成尽量多的子串，并保证每个字母最多只在其中一个子串中出现。
 * 请返回由一个或多个整数表示的分割后各子串的长度。
 * 
 * 输入描述：来自标准输入的一行由小写字母组成的字符串。
 * 
 * 输出描述：字符串最优分割后各子串的长度，多个数字之间由空格分隔。
 * 
 * 输入：
 * ababbacadefgdehijhklij
 * 
 * 输出：
 * 8 6 8
 * 
 * 
 */



function processStr(str){
    let output=[];
    let resStr = str.split('').reverse().join('');
    let len = str.length;
    let storeB=[];
    let left,right;
    
    for (let i = 0; i < len; i++) {
        right = len-resStr.indexOf(str[i])-1;
        storeB.push([i,right]);
    }
    storeB.sort((a,b)=>a[0]-b[0]);
    output.push(storeB[0]);
    let lt,rt,index;
    for (let j = 1; j < storeB.length; j++) {
        lt = storeB[j][0];
        rt = storeB[j][1];
        index = output.length-1;
        if(lt<=output[index][1]&&rt>=output[index][1]){
            output[index][1]=rt;
        }else if(lt>output[index][1]){
            output.push(storeB[j]);
        }
    }
    let outside = output.map((a)=>a[1]-a[0]+1);
    return outside;
}


let str = "ababbacadefgdehijhklij";
console.log(processStr(str));