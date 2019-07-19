/*
 * @Author: SkylineBin 
 * @Date: 2019-07-19 09:32:56 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-19 10:12:35
 */


/****
 * 
 * 九宫格手机键盘，将数字字符串转换成可能出现的字符串组合
 * 
 * input: '23'
 * output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var wordMap = {
        "2": ['a','b','c'],
        "3": ['d','e','f'],
        "4": ['g','h','i'],
        "5": ['j','k','l'],
        "6": ['m','n','o'],
        "7": ['p','q','r','s'],
        "8": ['t','u','v'],
        "9": ['w','x','y','z']
    }
    var ouside = [];
    if(!digits || digits.length === 0){
        return ouside;
    }
    var initStr = digits;
    // 采用回溯的思想解题，类似遍历的解法
    this.backtrack = function(str, tempDigits){
        if(tempDigits.length === 0){
            ouside.push(str);
        }else {
            var tempDigit = tempDigits.substring(0,1);
            var tempArr = wordMap[tempDigit];
            for(var i=0;i<tempArr.length;i++){
                var tempData = tempArr[i];
                this.backtrack(str+tempData, tempDigits.substring(1))
            }
        }
    };
    this.backtrack('', initStr);
    return ouside;
};

/**
 * 
 * 另一种优秀的解法
 * 
 * 
*/

var letterCombinations2 = function(digits) {
    if(digits.length <= 0){
        return [];
    }
    const wordMap = {
        "2": ['a','b','c'],
        "3": ['d','e','f'],
        "4": ['g','h','i'],
        "5": ['j','k','l'],
        "6": ['m','n','o'],
        "7": ['p','q','r','s'],
        "8": ['t','u','v'],
        "9": ['w','x','y','z']
    }

    function getAllList(digitals){
        if(digitals.length === 1){
            return wordMap[digitals];
        }
        let backConbin = [], tempArr = [];
        tempArr = getAllList(digitals.substring(1));
        let tempList = wordMap[digitals[0]];
        let tempWord,tempStr;
        for(let i=0;i<tempList.length;i++){ // let word of  tempList
            tempWord = tempList[i];
            for (let j=0;j<tempArr.length;j++) {
                tempStr = tempArr[j];
                backConbin.push(tempWord+tempStr);
            }
        }
        return backConbin;
    }
    return getAllList(digits);
}

let str = '23';
console.log(letterCombinations2(str));