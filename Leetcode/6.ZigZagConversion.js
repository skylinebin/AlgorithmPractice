/*
 * @Author: SkylineBin 
 * @Date: 2019-05-23 16:58:07 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-23 19:22:59
 */


/****
 * 
 * Z字打印输出字符串
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let backStr = "";
    if (s.length <= numRows || numRows === 1) {
        return s;
    }
    let tempArr = [];
    for (let i = 0; i < numRows; i++) {
        tempArr[i]=[];
    }
    let j=0;
    let utod = true;
    let index = 0;
    while(s[j]){
        if (utod) {
            tempArr[index++].push(s[j]);
            if (index === numRows) {
                index = numRows - 1;
                utod = false;
            }
        } else {
            if (index === numRows-1 || index === 0) {
                tempArr[index].push('#');
                j = j-1;
            } else {
                tempArr[index].push(s[j]);
            }

            if (index === 0) {
                index = 0;
                utod = true;
            } else {
                index--;
            }
        }
        // console.log(tempArr);
        j++;
    }

    tempArr.map(item => {
        item.map(tempdata =>{
            if (tempdata !== '#') {
                backStr+= tempdata;
            }
        })
    })
    return backStr;

};

let s = "PAYPALISHIRING",
    numRows = 2;

console.log(convert(s, numRows));