/*
 * @Author: SkylineBin 
 * @Date: 2019-08-07 10:39:50 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-12 22:20:37
 */


function processStr(str){
    let output=[];
    let resStr = str.split('').reverse().join('');
    let len = str.length;
    let left=0,right=0;
    right = len-resStr.indexOf(str[0]);
    for (let i = 0; i < len; i++) {
        let sec = len-resStr.indexOf(str[i]);
        if(i!==sec&&i<right){

        }
        
    }



}


let str = "ababbacadefgdehijhklij";
console.log(processStr(str));