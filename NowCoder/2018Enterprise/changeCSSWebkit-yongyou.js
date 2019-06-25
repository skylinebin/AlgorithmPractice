/*
 * @Author: SkylineBin 
 * @Date: 2019-06-25 21:16:37 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-25 21:58:05
 */


/*****
 * 
 * 
 * 
 * 
 */

function changeItem(arr){
    let newArr = arr.toLowerCase();
    let backStr = "";
    let state =true;
    for (let i = 0; i < newArr.length; i++) {
        if(i!==0 && newArr[i]==='-'){
            state = false;
        }else if(newArr[i] !=='-'){
            if(!state){
                backStr += newArr[i].toUpperCase();
                state = !state;
            }else{
                backStr += newArr[i];
            }
        }
    }
    return backStr;
}
let arr = "-webkit-background-image";
console.log(changeItem(arr));

// 官方答案
const camel_hump = str => {
    return str.replace(/(?:\-|\_)([a-z])/g, (input, match) => {
        return match.toUpperCase();
    });
}