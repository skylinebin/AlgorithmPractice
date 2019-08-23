/*
 * @Author: SkylineBin 
 * @Date: 2019-06-30 21:53:06 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-23 16:41:27
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

// let N=10;
// console.log(findPrime(N));

// 以上算法复杂度为 O(N^2)

// 简化思路  

// 方法二,简化原理,只需要判断 从 2~x^(1/2) 是否存在一个数能被x整除
// 使用 j*j <= i 替代 j<=parseInt(Math.sqrt(x)) 可以降低计算的时间复杂度
function findPrime2(N) {
    let list = [];
    if(N<=2){
        return list.join(' ');
    }
    var i = 2, j = 2;
    let state;
    while(i<N) {
        state = true;
        for(; j*j <= i; j++) {
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

// 以上时间复杂度是 O(N*log(N))


let N=20000;
console.time('primeOne');
findPrime(N);
console.timeEnd('primeOne');
// primeOne: 790.809ms


console.time('primeTwo');
// console.log(findPrime2(N));
findPrime2(N);
console.timeEnd('primeTwo');
// primeTwo: 10.378ms

// 时间复杂度简直是锐减




// 继续优化
// 每一个合数都能拆分成素数相乘得到的结果，如果不能被素数相乘得到，则这个数也是素数
// 将素数作为试除因子,如果可以整除就不是素数


function findPrime3(N) {
    let list = [];
    if(N<=2){
        return list.join(' ');
    }
    var i = 3, j = 0;
    let state;
    list.push(2);
    while(i<N) {
        state = true;
        for(; j<list.length && list[j]*list[j] <= i; j++) {
            if (i % list[j] === 0) {
                state = false;
            }
        }
        if (state) {
            list.push(i);
        }
        j = 0;
        i++;
    }
    return list.join(' ');
}

console.time('primeThree');
// console.log(findPrime3(N));
findPrime3(N);
console.timeEnd('primeThree');
//primeThree: 5.084ms