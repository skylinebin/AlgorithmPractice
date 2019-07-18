/*
 * @Author: SkylineBin 
 * @Date: 2019-07-18 22:35:38 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-18 22:45:32
 */


/******
 * 
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * 
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return (/^(\w+)\1+$/g).test(s);
};


var repeatedSubstringPattern2 = function(s) {
    var str = s+s;
    return str.slice(1, str.length-1).includes(s);
};


