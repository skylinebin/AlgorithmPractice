/*******
 * 
 * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，
 * 但是与"aa.a"和"ab*a"均不匹配
 * 
 * 
 * 
 */

function matchOld(s, pattern) {
    // write code here
    s === undefined ? '': s;
    pattern === undefined ? '' : pattern;
    if (s === '' && pattern === '') {
        return true;
    }
    if (s !== '' && pattern === '') {
        return false;
    }
    if (s === '' && pattern === '.') {
        return false;
    }
    var i  = 0;
    // 当 pattern 的下一个字符不是 *,则字符次序不会变化
    pattern[i + 1] === undefined ? '' : pattern[i + 1];
    if (pattern[i+1] !== '*') {
        if (s[i] === pattern[i] || ( s[i] !== '' && pattern[i] === '.')) {
            return matchOld(s.slice(1), pattern.slice(1));
        } else {
            return false;
        } 
    } else {
        // 当 pattern 的下一个字符是 *
        if (s[i] === pattern[i] || (s[i] !== '' && pattern[i] === '.')) { // 都表示当前的这个字符是相同的
            if (pattern[i] === '.') {
                return matchOld(String(s[s.length - 1]), String(pattern[pattern.length - 1]));
            }
            return matchOld(s, pattern.slice(2)) || matchOld(s.slice(1), pattern);
        } else {
            // 当前字符不相同，下一个是*,*前面的字符可能出现 0 次
            return matchOld(s, pattern.slice(2));
        }
    }
}

// 上述代码未通过


// "bcbbabab",".*a*a"
// var arr1 = 'a';
// var arr2 = '.';
// var arr1 = 'bcbbabab';
// var arr2 = '.*a*a';
// console.log(matchOld(arr1, arr2));


// 重新新的代码
//s, pattern都是字符串
function match(s, pattern) {
    if (s.length === 0 && pattern.length === 0){
        // s 和 pattern 都为空，可以匹配
        return true;
    } else if (s.length !== 0 && pattern.length === 0) {
        // s 不为空，pattern 为空，不可以匹配
        return false;
    } else if (s.length ===0 && pattern.length !== 0){
        // s为空，pattern 不为空，只有第二个字符是*时可能出现
        if (pattern.length > 1 && pattern[1] === '*') {
            return match(s,pattern.slice(2));
        } else {
            return false;
        }
    } else {

        // 第二个字符是 * 时需要考虑
        if (pattern.length > 1 && pattern[1] === '*') {
            if (s[0] !== pattern[0] && pattern[0] !== '.') {
                // 此时的 * 号可视为前一个字符出现 0 次
                return match(s, pattern.slice(2));
            } else {
                // 第一个字符可以匹配就需要考虑: 1.*还是让前一个字符出现0次，吞掉前一字符；
                // 2.*让前一个字符出现一次，此时*号省略,匹配下一字符；
                // 3.*让前一字符出现2次以上，匹配S的后续字符
                return match(s, pattern.slice(2)) || match(s.slice(1), pattern.slice(2)) || match(s.slice(1), pattern);
            }
        } else {
            // 第二个字符不是 *
            if (s[0] ===pattern[0] || pattern[0] === '.') {
                // 匹配了当前字符，匹配下一个字符
                return match(s.slice(1), pattern.slice(1));
            } else {
                // 当前字符不匹配，返回false
                return false;
            }
        }
    }
}

// 以上代码已通过

var arr1 = 'aaa';
var arr2 = 'ab*a';
console.log(match(arr1, arr2));

