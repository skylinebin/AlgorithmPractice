/*
 * @Author: SkylineBin 
 * @Date: 2019-06-20 21:27:03 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-20 21:42:16
 */


function findMaxLengthSubString(str){
    let maxNum = 1;
    
    this.dfs = function(tempStr,num){
        if(tempStr[1] && tempStr[0] !== tempStr[1]){
            num++;
        } else if(!tempStr[1] || tempStr[0] === tempStr[1]){
            return;
        }
        if(num > maxNum){
            maxNum = num;
        }
        tempStr = tempStr.substring(1, tempStr.length);
        if(tempStr.length > 1){
            this.dfs(tempStr, num)
        }
        return;
    }
    for(let i=0;i< str.length;i++){
        let tempStr = str.substring(i,str.length);
        this.dfs(tempStr,1);
    }
    return maxNum;
}



// let initdata = readline().split(" ");
// let str = initdata[0];

// print(findMaxLengthSubString(str));

// let str = "111101111";
let str = "000011110000";
console.log(findMaxLengthSubString(str));