/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 20:45:34 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-05 21:23:58
 */


/******
 * 
 * 两人随机平分 52 张扑克，每人 26张
 * byte 先开始
 * dance 后开始
 * 
 * 相同的收回两张相同的牌及中间所有的牌
 * 
 * 
 * 
 */

function judgeWhoWin(arrB,arrD){
    let lenB=0,lenD=0;
    let datas = [];
    let i=0,j=0;
    let stateB=-1,stateD=-1;
    let outside;
    while(i<26){
        stateB = datas.indexOf(arrB[i]);
        if(stateB > -1){
            lenB += parseInt(datas.length + 1 - stateB);
            if(stateB === 0){
                datas = [];
            }else{
                datas = datas.slice(0, stateB);
            }
            
        }else{
            datas.push(arrB[i]);
        }
        stateD = datas.indexOf(arrD[i]);
        if(stateD > -1){
            lenD += parseInt(datas.length + 1 - stateD);
            if(stateD === 0){
                datas = [];
            }else{
                datas = datas.slice(0, stateD);
            }
        }else{
            datas.push(arrD[i]);
        }
        i++;
        // console.log(datas);
    }
    if(lenB === lenD){
        outside = "Draw";
    }else if(lenB > lenD){
        outside = "Byte";
    }else {
        outside = "Dance";
    }
    return outside;
}

let arrB = [10,2,5,6,13,11,11,4,10,8,12,5,4,1,8,1,7,12,4,13,6,9,9,9,5,7];
let arrD = [6,3,13,8,2,3,7,3,2,2,12,11,10,6,10,1,1,12,3,5,7,11,13,4,8,9];

console.log(judgeWhoWin(arrB,arrD));