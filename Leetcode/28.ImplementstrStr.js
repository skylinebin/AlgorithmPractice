/*
 * @Author: SkylineBin 
 * @Date: 2019-07-18 22:14:45 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-18 22:35:19
 */


/*****
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * 
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var reg = new RegExp(needle);
    return haystack.search(reg);
    // return haystack.indexof(needle);
};


/****
 * 
 * 普通但是优化的解法
 * 
 */

var strStr2 = function(haystack, needle) {
    if(!needle.length){
        return 0;
    }

    if(haystack.length === needle.length && haystack !== needle){
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        let copy = haystack.slice(i, needle.length+i);
        if(copy === needle){
            return i;
        }
    }
    return -1;
}