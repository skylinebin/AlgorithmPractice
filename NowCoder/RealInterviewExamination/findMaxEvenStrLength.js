/*****
 * 
 * 计算删除多少后还是偶串的最大长度
 * 
 * 
 */


function findMaxLengthEvenStr(str){
    let backEvenLen = 0;
    this.checkIfEven = function(tempStr){
        if(tempStr.length % 2 !== 0){
            return false;
        }
        if (tempStr.substring(0,tempStr.length/2) === tempStr.substring(tempStr.length/2,tempStr.length)){
            return true;
        }
        return false;
    }
    for(let i=1;i<str.length;i++){
        let tempStr = str.substring(0,str.length-i);
        if(this.checkIfEven(tempStr)){
            return tempStr.length;
        }
    }
    return backEvenLen;
}




var initPre = readline().split(" ");
var linstr = initPre[0];
print(findMaxLengthEvenStr(linstr))