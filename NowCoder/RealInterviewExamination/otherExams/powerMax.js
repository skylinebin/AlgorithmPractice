/*
 * @Author: SkylineBin 
 * @Date: 2019-07-15 19:47:23 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-15 20:24:34
 */


/****
 * n = xi^yi
 * 64 = 64^1=8^2=4^3=2^6
 * f(n) = max(yi)
 * 
 * f(64)=max(1,2,3,6)=6
 * 
 * 给定区间 M,N
 * 定义 g(M,N) = max(f(i))
 * M<=i<=N
 * 
 * g(63,65)=6
 * g(61,63)=1
 * 
 * 字节跳动面试题
 * 
 */


function maxPower(numM,numN){
    if(numM > numN){
        return 0;
    }
    let maxData = 1;
    for (let i = numM; i <= numN; i++) {
        for (let j = 63; j >=0; j--) {
            if(Math.pow(i, 1/j) % 1 === 0){
                // JavaScript 中判断一个数是否是整数，可以对 1 进行取余。如果余数为0 则此数为整数
                if(j > maxData){
                    maxData = j;
                }
            }
        }
    }
    return maxData;
}

let numM = 26;
let numN = 28;
console.log(maxPower(numM,numN));