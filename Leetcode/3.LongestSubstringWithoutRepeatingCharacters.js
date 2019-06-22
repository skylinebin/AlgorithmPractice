/******
 * 
 * 最长无重复子字符串
 * 
 * 
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    if(s.length === 1){
        maxLen = 1;
    }
    function checkIfHasRepeat(str){
        if(Array.from(new Set(str.split(''))).join('') === str){
            return true;
        }else {
            return false;
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            let temp = s.substring(i,j);
            if(j-i > maxLen && checkIfHasRepeat(temp)){
                maxLen = j-i;
            }
        }
    }
    return maxLen;

};

// 以上方案超时

// let s = 'abcabcbb';
// console.log(lengthOfLongestSubstring(s));

var lengthOfLongestSubstring2 = function(s) {
    let maxLen = 0;
    if(s.length === 1){
        maxLen = 1;
    }

    this.dfs = function(tempstr,i,j){
        let temp = tempstr.substring(i,j);
        if(temp.indexOf(tempstr[j-1]) === temp.length-1){
            if(temp.length > maxLen){
                maxLen = temp.length;
            }
        }else {
            return;
        }
        if(j < s.length){
            this.dfs(tempstr,i,j+1);
        }
        return;
    }
    for(let i=0;i< s.length-1;i++){
        this.dfs(s,i,i+1);
    }
    return maxLen;

};

// 此方案可通过

// let s = 'pwwkew';
// console.log(lengthOfLongestSubstring2(s));

// 以下是官方给的解题方案 解题思路滑动窗口
var lengthOfLongestSubstring3 = function(s) {
    let maxLen = 0;
    let tset = new Set();
    let i=0,j=0;
    let len = s.length;
    while(i< len && j < len){
        if(!tset.has(s[j])){
            tset.add(s[j++]);
            maxLen = Math.max(maxLen, j-i);
        } else {
            tset.delete(s[i++]);
        }
    }
    return maxLen;
};

let s = 'pwwkew';
console.log(lengthOfLongestSubstring3(s));