/*
 * @Author: SkylineBin 
 * @Date: 2019-07-30 10:49:42 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-30 11:26:19
 */


/*****
 * 
 * 牛牛的闹钟
 * 
 * 牛牛总是睡过头，所以他定了很多闹钟，只有在闹钟响的时候他才会醒过来并且决定起不起床。
 * 从他起床算起他需要X分钟到达教室，上课时间为当天的A时B分，请问他最晚可以什么时间起床
 * 
 * 输入描述：
 * 每个输入包含一个测试用例。
 * 每个测试用例的第一行包含一个正整数，表示闹钟的数量N(N<=100)。
 * 接下来的N行每行包含两个整数，表示这个闹钟响起的时间为Hi(0<=A<24)时Mi(0<=B<60)分。
 * 接下来的一行包含一个整数，表示从起床算起他需要X(0<=X<=100)分钟到达教室。
 * 接下来的一行包含两个整数，表示上课时间为A(0<=A<24)时B(0<=B<60)分。
 * 数据保证至少有一个闹钟可以让牛牛及时到达教室。
 * 
 * 
 * 输出描述：
 * 输出两个整数表示牛牛最晚起床时间。
 * 
 * 
 * 输入：
 * 3 
 * 5 0 
 * 6 0 
 * 7 0 
 * 59 
 * 6 59
 * 
 * 输出：
 * 6 0
 * 
 * 
 */

function findLastGetUpTime(numN,clocks,numMi,classTime){
    let getUpTime=[0,0];
    function checkIfOntime(clock,numMi,classTime){
        let state = false;
        let temp = clock[1]+numMi;
        if(clock[0]< classTime[0]){
            if(temp<= 60){
                state = true;
            }else {
                let tempArr = [];
                tempArr.push(clock[0]+ parseInt(temp/60));
                tempArr.push(temp%60);
                state = checkIfOntime(tempArr,0,classTime)
            }
        }else if(clock[0]=== classTime[0]){
            if(temp <= classTime[1]){
                state = true;
            }
        }
        return state;
    }
    for(let i=0;i<numN;i++){
        if(checkIfOntime(clocks[i],numMi,classTime)){
            let tempClock = clocks[i];
            if(getUpTime[0]<tempClock[0] || (getUpTime[0]===tempClock[0] && getUpTime[1]<tempClock[1])){
                getUpTime=tempClock;
                
            }
        }
    }
    return getUpTime.join(' ');
}







let numN = parseInt(readline().split(' ')[0]);
let clocks = [];
for(let i=0;i<numN;i++){
    let tempData = readline().split(' ');
    clocks.push([parseInt(tempData[0]),parseInt(tempData[1])]);
}

let numMi = parseInt(readline().split(' ')[0]);
let classTime = [];
let temps = readline().split(' ');
classTime.push(parseInt(temps[0]));
classTime.push(parseInt(temps[1]));

print(findLastGetUpTime(numN,clocks,numMi,classTime))