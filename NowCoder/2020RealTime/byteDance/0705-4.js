/*
 * @Author: SkylineBin 
 * @Date: 2019-07-06 12:58:14 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-06 16:38:19
 */


/*****
 * 
 * 
 * 道路规划问题
 * 
 * 
 * 
 */

function roadPlaning(numN,numM,strC,arrR){
    let outSide = [];
    let rightArr = [];
    let recordArr = [];
    let roadNum = 0;
    for (let i = 0; i < arrR.length; i++) {
        let tempA = arrR[i];
        // 剔除那些不满足 A->B, B->A 的道路
        if(strC[parseInt(tempA[0])-1] !== strC[parseInt(tempA[1])-1]){
            rightArr.push(tempA);
            recordArr.push(i);
        }
    }
    // 如果没有符合同类型不互通的道路，则返回空
    if(rightArr.length === 0){
        return outSide;
    }

    // 检查当前收集的道路对能否满足所有互联需求
    function check(arr){
        for(let m=1;m<=numN;m++){
            if(arr.indexOf(m)===-1){
                return false;
            }
        }
        if(arr.length === numN){
            return false;
        }
        return true;
    }

    let tempArr = [];
    // 按照顺序进行填入检查，此处需要更改和升级
    for (let j = 0; j <=rightArr.length; j++) {
        tempArr = tempArr.concat(rightArr[j]);
        outSide.push(recordArr[j]+1);
        if(check(tempArr)){
            return outSide;
        }
    }
    return outSide;
}

let numN = 4;
let numM = 6;
let strC = "AABB";
let arrR = [[3,4],[2,1],[4,2],[3,1],[1,4],[2,3]];
let b = roadPlaning(numN,numM,strC,arrR);
console.log(b.length,b);

// 部分解决方案