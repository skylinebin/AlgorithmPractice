/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 20:45:34 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-06 16:43:38
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
        // 在场面的牌中找先手的牌
        stateB = datas.indexOf(arrB[i]);
        if(stateB > -1){
            // 找到先手的牌就对场面的牌进行处理
            lenB += parseInt(datas.length + 1 - stateB);
            if(stateB === 0){
                // 如果位置是第一张牌，牌面清空
                datas = [];
            }else{
                datas = datas.slice(0, stateB);
            }
        }else{
            // 没找到则先手的牌置入场中
            datas.push(arrB[i]);
        }
        // 要在这里对后手搜索，因为先手可能影响牌面
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