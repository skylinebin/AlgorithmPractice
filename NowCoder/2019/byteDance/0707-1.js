/*
 * @Author: SkylineBin 
 * @Date: 2019-07-07 16:29:51 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-07 17:21:23
 */


/******
 * 
 * 比赛问题
 * 
 * 田忌赛马问题
 * 
 * 思路总结：先比较最大的是否大，再比较最小的是否大，
 * 如果都不满足就用最小的和对方最大的比较输一场，后续继续按照此思路继续比较
 * 
 * 
 * 
 */

function findMaxCount(arrA, arrB){
    let count = 0;
    arrA.sort((a,b)=>a-b); // my team
    arrB.sort((a,b)=>a-b); // other team
    let i=0,j=0;
    let m= arrA.length-1,n=arrA.length-1;
    let state = true;
    while(state){
        if(i===m){
            state= !state;
        }
        if(arrA[m]>arrB[n]){
            count++;
            m--;
            n--;
        }else if(arrA[i]>arrB[j]){
            i++;
            j++;
            count++;
        }else {
            if(arrA[i]<arrB[n]){
                count--;
            }
            i++;
            n--;
        }
    }
    return count;
}

let arrA = [99, 51, 77];
let arrB = [91, 92, 49];
console.log(findMaxCount(arrA, arrB));
