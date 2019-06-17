/*
 * @Author: SkylineBin 
 * @Date: 2019-06-17 19:46:16 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-17 20:03:30
 */


function findMaxKindsofMusicList(allLength, lengthA, numX, lengthB, numY){
    let countNum = 0;
    let c = [];
    let mod = 1000000007;
    for (let i = 0; i <= 100; i++) {
        c[i] = [];
        c[i][0] = 1;
    }
    for (let j = 1; j <=100; j++) {
        for (let k = 1; k <=100; k++) {
            c[0][k] = 0;
            c[j][k] = (c[j-1][k-1] + c[j-1][k]) % mod;
        }
    }

    for (let i = 0; i <= numX; i++) {
        if (i*lengthA <= allLength && (allLength - lengthA*i)%lengthB === 0 && (allLength - lengthA*i)/lengthB <= numY) {
            countNum = (countNum + (c[numX][i] * c[numY][(allLength - lengthA*i)/lengthB]) % mod) % mod;
        }
    }

    return countNum;
}

let allLength = 5;
let lengthA = 2;
let numX = 3;
let lengthB = 3;
let numY = 3;

console.log(findMaxKindsofMusicList(allLength, lengthA, numX, lengthB, numY));