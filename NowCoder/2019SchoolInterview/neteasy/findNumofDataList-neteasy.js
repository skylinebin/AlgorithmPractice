/*
 * @Author: SkylineBin 
 * @Date: 2019-07-02 19:37:30 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-02 20:33:22
 */


/****
 * 
 * find data list of Num N and Num K
 * 
 * 
 */

function findNumofData(numN, numK){
    if(numN<1 || numK<0){
        return 0;
    }
    let count = 0;
    for(let x=1;x<=numN;x++){
        for(let y=1;y<=numN;y++){
            if(parseInt(x % y) >= numK){
                count++;
            }
        }
    }
    return count;
}

// 以上算法时间复杂度过高

let numN = 5;
let numK = 2;

// console.log(findNumofData(numN, numK));
// let datas = readline().split(' ');
// let numN = parseInt(datas[0]);
// let numK = parseInt(datas[1]);
// print(findNumofData(numN, numK));



function findNumofData2(numN, numK){
    if(numN<1 || numK<0){
        return 0;
    }
    let count = 0;
    let x=1,y=1;
    if(numK === 0){
        count = numN*numN;
    }else {
        for(let y=numK+1;y<=numN;y++){
            // 在 1~ n*y 中，共有 [(numN/y)*(y-numK)]组 (此时 n*y+y>numN)
            // 在 n*y+1 ~ numN 中 有 (numN % y)-numK+1 个数满足
            count+= parseInt(numN/y)*parseInt(y-numK)+ Math.max(parseInt(numN%y-numK+1),0);
        }
    }

    return count;
}

console.log(findNumofData2(numN, numK));