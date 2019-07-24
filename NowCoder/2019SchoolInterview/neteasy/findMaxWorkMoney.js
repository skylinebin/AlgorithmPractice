/*
 * @Author: SkylineBin 
 * @Date: 2019-07-23 14:52:39 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-23 16:24:15
 */

/***
 * 
 * 为了找到自己满意的工作，牛牛收集了每种工作的难度和报酬。牛牛选工作的标准是在难度不超过自身能力值的情况下，牛牛选择报酬最高的工作。
 * 在牛牛选定了自己的工作后，牛牛的小伙伴们来找牛牛帮忙选工作，牛牛依然使用自己的标准来帮助小伙伴们。牛牛的小伙伴太多了，于是他只好把这个任务交给了你。
 * 
 * 
 * 输入：  
 * 每个输入包含一个测试用例。
 * 每个测试用例的第一行包含两个正整数，分别表示工作的数量N(N<=100000)和小伙伴的数量M(M<=100000)。
 * 接下来的N行每行包含两个正整数，分别表示该项工作的难度Di(Di<=1000000000)和报酬Pi(Pi<=1000000000)。
 * 接下来的一行包含M个正整数，分别表示M个小伙伴的能力值Ai(Ai<=1000000000)。
 * 保证不存在两项工作的报酬相同。
 * 
 * 输出：
 * 对于每个小伙伴，在单独的一行输出一个正整数表示他能得到的最高报酬。一个工作可以被多个人选择。
 * 
 * 
 * ***/



function findMaxPi(numM,workDi,workPi,datas){
    let outside = [];
    let work = new Map();
    for(let i=0;i<workDi.length;i++){
        work.set(parseInt(workDi[i]),parseInt(workPi[i]));
    }
    //let sortArr = [...work].sort((a,b)=>b[1]-a[1]);
    for(let j=0;j<datas.length;j++){
        let tempPi = 0;
        let tempValue = parseInt(datas[j]);
        //tempPi = ([...work].filter((k,v)=>k<tempValue))[0];
        // for(let key of work.leys()){
        //     if(parseInt(key) <= tempValue){
        //         tempPi = Math.max(tempPi, work.get(key));
        //     }
        // }
        work.forEach(function(value,key){
            if(key<=tempValue){
                tempPi = Math.max(tempPi, value);
            }
        })
        //tempPi = work.get(tempValue);
        outside.push(tempPi);
    }
    return outside;
}



function findMaxPi(numM,workDP,datas){
    let outside = [];
    let work = new Map();
    let a = [];
    //workDP.sort((a,b)=>a[0]-b[0]);
    //for(let i=1;i<workDP.length;i++){
        //workDP[i][1] = Math.max(workDP[i-1][1],workDP[i][1]);
    //}
    let len = workDP.length;
    for(let i=0;i<workDP.length;i++){
        work.set(parseInt(workDP[i][0]),parseInt(workDP[i][1]));
        a[i] = parseInt(workDP[i][0]);
    }
    let lenD = datas.length;
    for (let j = 0; j < lenD; j++) {
        a[len+j] = datas[j];
        if(!work.has(datas[j])){
            work.set(datas[j],0);
        }
    }
    a.sort((a,b)=>a-b);
    let maxData = 0;
    for (let k = 0; k < len+lenD; k++) {
        // 找所有比当前费用小的价值最大值
        maxData = Math.max(maxData, work.get(a[k]));
        work.set(a[k],maxData);
    }
    for (let j = 0; j < lenD; j++) {
        outside.push(work.get(datas[j]));
    }
    return outside;
}


// 遇到奇怪的输入时处理方式

let j=0;
let numN,numM,initData;
while(!j){
    let datasOne=readline().split(' ');
    if(datasOne.length>=2){
        initData = datasOne;
        numN = parseInt(initData[0]);
        numM = parseInt(initData[1]);
        j++;
    }
}

let workDP = [];
let i=0;
while(i<numN){
    let tempData=readline().split(' ');
    if(tempData.length>=2){
        workDP.push([parseInt(tempData[0]),parseInt(tempData[1])]);
        i++;
    }
}
let state=0;
let datas = [];
while(!state){
    let dataDis= readline().split(' ');
    if(dataDis.length>=numM){
        state = 1;
        for(let j=0;j<numM;j++){
            datas.push(parseInt(dataDis[j]));
        }
    }
}


let outside = findMaxPi(numM,workDP,datas);
for(let k=0;k<outside.length;k++){
    print(outside[k]);
}