/*
 * @Author: SkylineBin 
 * @Date: 2019-09-05 12:47:36 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-09-05 13:01:14
 */


/****
 * 
 * 
 * 一组字符串的最长公共顺序子串
 * 
 * 要从头开始，有一个不一样就终止判断
 * 
 * 
 */


var longestCommonPrefix = function(strs) {
    if(strs.length===0){
        return '';
    }else if(strs.length===1){
        return strs[0];
    }
    strs.sort((a,b)=>a.length-b.length);
    let len = strs[0].length;
    let max=0,res='';
    let initStr = strs[0];
    let i=0;
    for(let j=i+1;j<=len;j++){
        let state=true;
        let temp = initStr.substring(i,j);
        for(let k=1;k<strs.length;k++){
            if(strs[k].substring(i,j)!==temp){
                state=false;
                break;
            }
        }
        if(state){
            if(temp.length>max){
                max=temp.length;
                res=temp;
            }
        }else{
            break;
        }
    }
    return res;
};

let strs=["c","c"];
console.log(longestCommonPrefix(strs));


/*****
 * 
 * Leetcode 上别人的更优解
 * 
 * 
 * 
 */

function longestCommonPrefix(strs){
    if(!strs || (strs.length===0)){
        return "";
    }
    strs.sort((a,b)=>a.length-b.length);
    const first=strs[0];
    if(!first){
        return "";
    }
    let prefix="";
    first.split('').every((strC,index)=>{
        if(strs.every(str => str[index]===strC)){
            prefix+= strC;
            return true;
        }else{
            return false;
        }
    });
    return prefix;
}







/****
 * 
 * 一组字符串中的所有公共连续子串，，不一定从头开始
 * 
 * 
 */
var longestCommonPrefixNonSort = function(strs) {
    if(strs.length===0){
        return '';
    }else if(strs.length===1){
        return strs[0];
    }
    strs.sort((a,b)=>a.length-b.length);
    let len = strs[0].length;
    let max=0,res='';
    let initStr = strs[0];
    for(let i=0;i<len;i++){
        for(let j=i+1;j<=len;j++){
            let state=true;
            let temp = initStr.substring(i,j);
            for(let k=1;k<strs.length;k++){
                if(strs[k].indexOf(temp)===-1){
                    state=false;
                }
            }
            if(state){
                if(temp.length>max){
                    max=temp.length;
                    res=temp;
                }
            }
        }
    }
    return res;
};