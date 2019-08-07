/*
 * @Author: SkylineBin 
 * @Date: 2019-08-07 17:08:53 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-07 17:10:23
 */

/*****
 * 
 * 对字符串进行RLE压缩，将相邻的相同字符，用计数值和字符值来代替。
 * 例如：aaabccccccddeee，则可用3a1b6c2d3e来代替。
 * 
 * 输入描述：
 * 输入为a-z,A-Z的字符串，且字符串不为空，如aaabccccccddeee
 * 
 * 输出描述：
 * 
 * 压缩后的字符串，如3a1b6c2d3e
 * 
 * 
 * 
 */


function zipStr(str){
    let backStr = '';
    let count=1;
    for(let i=0;i<str.length;i++){
        if(i!==0&&str[i-1]===str[i]){
            count++;
        }else if(i!==0&&str[i-1]!==str[i]){
            backStr+= count+str[i-1];
            count=1;
        }
        if(i===str.length-1){
            backStr+= count+str[i];
        }
    }
    return backStr;
}

let str = readline();
print(zipStr(str));