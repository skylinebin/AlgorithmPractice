/****
 * 
 * get Longest Palindromic Substring of one string
 * 
 * 
 * 
 */

// dfs solution
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 0;
    let maxPaStr = '';
    if(s.length === 1){
        maxLen=1;
        maxPaStr=s;
    }
    this.dfs = function(tempStr,i,j){
        let temp = tempStr.substring(i,j);
        if(temp === temp.split('').reverse().join('')){
            if(j-i+1 > maxLen){
                maxLen = j-i+1;
                maxPaStr = temp;
            }
        }

        if(j<= tempStr.length -1){
            this.dfs(tempStr,i,j+1);
        }
        return;
    }
    for(let i=0;i< s.length-1;i++){
        this.dfs(s,i,i+1);
    }
    return maxPaStr;
};

let testString= "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel";

// 对于长字符串，以上方法超时  

var longestPalindrome2 = function(s) {
    let maxLen = 0;
    let maxPaStr = '';
    if(s.length === 1){
        maxLen=1;
        maxPaStr=s;
    }
    let reverseS = s.split('').reverse().join('');
    let lens = s.length;
    for(let i=0;i< s.length;i++){
        for (let j = i+1; j <=s.length; j++) {
            let temp = s.substring(i,j);
            if(j-i+1 > maxLen && temp === reverseS.substring(lens-j, lens-i)){
                maxLen = j-i+1;
                maxPaStr =temp;
            }
        }
    }
    return maxPaStr;
};

// 以上代码可通过

let s = "abacda";
console.log(longestPalindrome2(s));