/*****
 * 
 * 用字符串拼最少的回文数
 * 
 * 2019.06.19
 * 
 */


function findminNumofStr(str){
    let minNum = 0;
    let arr = str.split('');
    // 转换成数组后，进行归并迭代
    minNum = arr.reduce((tempSet,ele)=> {
        return tempSet.delete(ele)? tempSet:tempSet.add(ele);
    },new Set()).size;
    if(minNum === 0){
        minNum = 1;
    }
    return minNum;
}



var initPre = readline().split(" ");
var linstr = initPre[0];
print(findminNumofStr(linstr))