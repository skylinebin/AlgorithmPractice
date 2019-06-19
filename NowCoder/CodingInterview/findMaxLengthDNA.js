/****
 * 
 * 查找最长DNA子字符串
 * 
 * 2019.06.19
 * 
 */


function findMaxLengthDNA(str){
    let backLen = 0;
    this.dfs = function(tempStr,num){
        let temp = tempStr[0];
        tempStr = tempStr.substring(1,tempStr.length);
        let state = false;
        if(temp === 'A' || temp === 'T' || temp === 'C' || temp === 'G'){
            num++;
            state = true;
        }
        if (num > backLen){
            backLen = num;
        }
        if (tempStr.length > 0 && state){
            this.dfs(tempStr,num);
        }
        return;
    }
    for(let i=0;i<str.length;i++){
        let tempstrs = str.substring(i,str.length);
        this.dfs(tempstrs,0);
    }
    return backLen;
}


var initPre = readline().split(" ");
var linstr = initPre[0];
print(findMaxLengthDNA(linstr));

