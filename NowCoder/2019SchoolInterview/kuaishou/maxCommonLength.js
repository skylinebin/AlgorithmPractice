/*
 * @Author: SkylineBin 
 * @Date: 2019-09-01 15:59:29 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-09-01 15:59:54
 */

/*****
 * 
 * 输入两个字符串
 * 找公共连续子串的最大长度
 * 
 * 
 */


function maxCommonLength(str1,str2){
    let maxCommon=0;
    for(let i=0;i<str1.length;i++){
        for(let j=i+1;j<=str1.length;j++){
            let tempStr=str1.substring(i,j);
            if(str2.indexOf(tempStr)!==-1){
                if(tempStr.length>maxCommon){
                    maxCommon=tempStr.length;
                }
            }
        }
    }
    return maxCommon;
}





let inits=readline().split(',');
let str1=inits[0];
let str2=inits[1];
print(maxCommonLength(str1,str2))