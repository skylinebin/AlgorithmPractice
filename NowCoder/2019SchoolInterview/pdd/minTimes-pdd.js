/*
 * @Author: SkylineBin 
 * @Date: 2019-07-26 20:06:41 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-26 20:22:11
 */

/****
 * 
 * 回合制游戏
 * 
 * 每个回合开始时你可以选择以下两个动作之一：聚力或者攻击。
 * 聚力会提高你下个回合攻击的伤害。
 * 攻击会对敌人造成一定量的伤害。如果你上个回合使用了聚力，那这次攻击会对敌人造成buffedAttack点伤害。否则，会造成normalAttack点伤害。
 * 给出血量HP和不同攻击的伤害，buffedAttack和normalAttack，返回你能杀死敌人的最小回合数。
 * 
 * 
 * 输入描述：  
 * 
 * 第一行是一个数字HP
 * 第二行是一个数字normalAttack
 * 第三行是一个数字buffedAttack
 * 1 <= HP,buffedAttack,normalAttack <= 10^9
 * 
 * 输出描述：  
 * 输出一个数字表示最小回合数
 * 
 * 示例：
 * 13
 * 3
 * 5
 * 
 * 输出：
 * 5
 * 
 * 
 */

// dfs 方案只能 AC 75%
function minTimes(hP,nA,bA){
    let minTime = Number.MAX_SAFE_INTEGER;
    let alP = hP;
    let maxNTime = 0;
    while(alP>0){
        maxNTime++;
        alP=alP-nA;
    }
    minTime = Math.min(minTime, maxNTime);
    alP = parseInt(hP);
    function dfs(current,times){
        if(current<=0){
            minTime = Math.min(minTime, times);
            return;
        }
        if(times>=minTime){
            return;
        }else {
            dfs(current-nA,times+1);
            dfs(current-bA,times+2);
        }
    }
    dfs(alP,0);
    return minTime;
}

let hP=100;
let nA=2;
let bA=5;
// console.log(minTimes(hP,nA,bA));



// 数学原理方案解决
function minTimes2(hP,nA,bA){
    let minTime;
    if(bA <= 2*nA){
        if(hP % nA === 0){
            minTime = hP/nA;
        }else {
            minTime = parseInt(hP/nA) + 1;
        }
    }else {
        if(hP % bA === 0){
            minTime = 2*(hP/bA);
        }else {
            let tempA = hP % bA;
            if(tempA <= nA){
                minTime = 2* parseInt(hP/bA)+1;
            }else {
                minTime = 2* parseInt(hP/bA)+2;
            }
        }
    }
    return minTime;
}
console.log(minTimes2(hP,nA,bA));

let hP = parseInt(readline().split(' ')[0]);
let nA = parseInt(readline().split(' ')[0]);
let bA = parseInt(readline().split(' ')[0]);

print(minTimes(hP,nA,bA));