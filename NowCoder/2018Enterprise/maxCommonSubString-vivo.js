/*
 * @Author: SkylineBin 
 * @Date: 2019-06-03 21:26:42 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-04 14:13:37
 */

/*****
 * 
 * 编程找出两个字符串中最大公共子字符串, 
 * 
 * 如 "abccade", "dgcadde"的最大子串为 "cad"
 * 
 * 
 */

// 枚举方法实现搜索
function maxCommonSubString(str1, str2){

    let backstr = "";
    if (str1 === '' || str2 === '') {
        return backstr;
    }
    let startPosition = 0;
    let maxLength =0;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                let k = 1;
                while (str1[i + k] === str2[j + k] && typeof str1[i + k] === 'string' && typeof str2[j + k] === 'string') {
                    k++;
                }
                if (k > maxLength) {
                    maxLength = k;
                    startPosition = i;
                }
            }
        }
    }
    if (maxLength > 0) {
        backstr = str1.slice(startPosition, startPosition+maxLength);
    }
    return backstr;
}

let str1 = "abccade";
let str2 = "dgcadde";

console.log(maxCommonSubString(str1, str2));


        // for (let index = startPosition; index <= maxLength; index++) {
        //     backstr += str1[index];
        // }