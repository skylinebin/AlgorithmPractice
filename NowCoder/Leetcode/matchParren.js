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

function match(s, pattern) {
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
            return match(s.slice(1), pattern.slice(1));
        } else {
            return false;
        } 
    } else {
        // 当 pattern 的下一个字符是 *
        if (s[i] === pattern[i] || (s[i] !== '' && pattern[i] === '.')) { // 都表示当前的这个字符是相同的
            if (pattern[i] === '.') {
                return match(String(s[s.length - 1]), String(pattern[pattern.length - 1]));
            }
            return match(s, pattern.slice(2)) || match(s.slice(1), pattern);
        } else {
            // 当前字符不相同，下一个是*,*前面的字符可能出现 0 次
            return match(s, pattern.slice(2));
        }
    }
}

// 上述代码未通过


// "bcbbabab",".*a*a"
// var arr1 = 'a';
// var arr2 = '.';
var arr1 = 'bcbbabab';
var arr2 = '.*a*a';
console.log(match(arr1, arr2));