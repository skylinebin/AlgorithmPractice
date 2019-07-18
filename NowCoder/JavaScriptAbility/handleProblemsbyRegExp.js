/*
 * @Author: SkylineBin 
 * @Date: 2019-07-18 14:33:45 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-18 15:15:43
 */

/****
 * 
 * 
 * 
 * 给定字符串 str，检查其是否以元音字母结尾
 * 
 */
function endsWithVowel(str) {
    return str.search(/[aeiou]$/i)===-1?false:true;
}

function endsWithVowel2(str) {
    return (/[aeiou]$/i).test(str);
}



/****
 * 
 * 
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * 
 */

// \1 表示引用，引用括号中第一次出现的字符
function containsRepeatingLetter(str) {
    var ser = /([a-zA-Z])\1/gi;
    return str.search(ser)===-1?false:true;
}

function containsRepeatingLetter2(str) {
    return (/([a-zA-Z])\1/gi).test(str);
}


/**
 * 
 * 
 * 给定字符串 str，检查其是否包含 连续3个数字 
 *   1、如果包含，返回最新出现的 3 个数字的字符串
 *   2、如果不包含，返回 false
 * 
 * 
 * 
*/
function captureThreeNumbers(str) {
    var ifHad = str.search(/[0-9]{3}/g);
    if(ifHad !== -1){
        return str.slice(ifHad,ifHad+3);
    }else {
        return false
    }
}

function captureThreeNumbers2(str) {
    var res = str.match(/\d{3}/g);
    return res? res[0]:false;
}


/*****
 * 
 * 
 * 给定字符串 str，检查其是否符合如下格式 
 * 1、XXX-XXX-XXXX 
 * 2、其中 X 为 Number 类型
 * 
 */

function matchesPattern(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
}


/***
 * 
 * 给定字符串 str，检查其是否符合美元书写格式 
 * 1、以 $ 开始 
 * 2、整数部分，从个位起，满 3 个数字用 , 分隔 
 * 3、如果为小数，则小数部分长度为 2 
 * 4、正确的格式如：$1,023,032.03 或者 $2.03，
 * 5、错误的格式如：$3,432,12.12 或者 $34,344.3
 * 
 * 
*/

function isUSD(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/g).test(str);
}





// ! 正则表达式方法总结  
// test() 方法 是 正则表达式作为主体 RegExp.test(string) 匹配返回 true 不匹配返回 false
// search() 方法 是 字符串作为主体 String.search(RegExp) 匹配 返回 初始字符的位置，不匹配 返回 -1
// match() 方法 是 字符串作为主体 String.match(RegExp) 匹配 则返回一个有内容的数组(首项为全局匹配内容，余下的而是子表达式的匹配内容) 不匹配则返回 null