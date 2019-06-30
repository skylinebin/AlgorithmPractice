/*
 * @Author: SkylineBin 
 * @Date: 2019-06-29 10:07:10 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-29 10:07:42
 */


/*****
 * 
 * 
 * 罗马字符串转数字
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbolArr = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let valueArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    if(s.length === 1){
        return valueArr[symbolArr.indexOf(s)];
    }
    let backNum = 0;
    for(let i =0;i<s.length;i++){
        if(i< s.length-1){
            if(symbolArr.indexOf(s[i])>symbolArr.indexOf(s[i+1])){
                backNum += parseInt(valueArr[symbolArr.indexOf(s.slice(i,i+2))]);
                i++;
            }else{
                backNum += parseInt(valueArr[symbolArr.indexOf(s[i])]);
            }
        }else{
            backNum += parseInt(valueArr[symbolArr.indexOf(s[i])]);
        }
    }
    return backNum;
};