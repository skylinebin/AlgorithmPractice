/*
 * @Author: SkylineBin 
 * @Date: 2019-07-22 14:17:41 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-22 14:23:15
 */


/*****
 * 
 * 数字序列第N位的值
 * 
 * 有一个无限长的数字序列 1，2，2，3，3，3，4，4，4，4，5，5，5，5，5。。。
 * （数字序列从1开始递增，且数字k在该序列中正好出现k次），求第n项是多少
 * 
 * 输入：输入为一个整数n
 * 4
 * 
 * 输出：输出一个整数，即第n项的值
 * 3
 * 
 * 
 * 
 */

// first Version
function countNum1(n){
    let saveList = [];
    for(let i=1;i<=n;i++){
        let temp = i;
        while(temp--){
            saveList.push(i);
        }
    }
    return saveList[n-1];
}



function countNum(n){
    let count = 0;
    for(let i=1;i<=n;i++){
        let temp = i;
        while(temp--){
            count++;
            if (count === n) {
                return i;
            }
        }
    }
}


console.log(countNum(4));

// let data = readline().split(' ');
// let numN = parseInt(data[0]);
// print(countNum(numN));
