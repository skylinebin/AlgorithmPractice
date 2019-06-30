/*
 * @Author: SkylineBin 
 * @Date: 2019-06-30 21:53:06 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-30 22:18:58
 */



/**
 *
 * 
 * 找出小于N的所有质数
 * 
 *
 * @param {*} N
 * @returns
 */
function findPrime(N) {
    let list = [];
    if(N<=2){
        return list.join(' ');
    }
    var i = 2, j = 2;
    let state;
    while(i<N) {
        state = true;
        for(; j < i; j++) {
            if (i % j === 0) {
                state = false;
            }
        }
        if (state) {
            list.push(i);
        }
        j = 2;
        i++;
    }
    return list.join(' ');
}

let N=10;
console.log(findPrime(N));