/*
 * @Author: SkylineBin 
 * @Date: 2019-07-22 14:54:43 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-22 15:01:53
 */


/*****
 * 
 * 会话列表  
 * 
 * 小云正在参与开发一个即时聊天工具，他负责其中的会话列表部分。
 * 会话列表为显示为一个从上到下的多行控件，其中每一行表示一个会话，每一个会话都可以以一个唯一正整数id表示。
 * 当用户在一个会话中发送或接收信息时，如果该会话已经在会话列表中，则会从原来的位置移到列表的最上方；如果没有在会话列表中，则在会话列表最上方插入该会话。
 * 小云在现在要做的工作是测试，他会先把会话列表清空等待接收信息。当接收完大量来自不同会话的信息后，就输出当前的会话列表，以检查其中是否有bug。
 * 
 * 
 * 输入:  
 * 输入的第一行为一个正整数T（T<=10），表示测试数据组数。
 * 接下来有T组数据。每组数据的第一行为一个正整数N（1<=N<=200），表示接收到信息的次数。
 * 第二行为N个正整数，按时间从先到后的顺序表示接收到信息的会话id。会话id不大于1000000000。
 * 
 * 输出:  
 * 对于每一组数据，输出一行，按会话列表从上到下的顺序，输出会话id。
 * 相邻的会话id以一个空格分隔，行末没有空格。
 * 
 * 输入实例:  
 * 3
 * 5
 * 1 2 3 4 5
 * 6
 * 1 100 1000 1000 100 1
 * 7
 * 1 6 3 3 1 8 1
 * 
 * 输出实例:
 * 
 * 5 4 3 2 1
 * 1 100 1000
 * 1 8 3 6
 * 
 * 
 * 
 */



function sessionList(arr){
    let output = [];
    function keepSession(lists){
        let currentList = [];
        for(i=0;i<lists.length;i++){
            if(currentList.indexOf(lists[i])>-1){
                let index = currentList.indexOf(lists[i]);
                currentList.splice(index,1);
            }
            currentList.unshift(lists[i]);
        }
        return currentList;
    }
    for(let j=0;j<arr.length;j++){
        // console.log(keepSession(arr[j]));
        output.push(keepSession(arr[j]));
    }
    return output;
}

let arr = [
    [1,2,3,4,5],
    [1,100,1000,1000,100,1],
    [1,6,3,3,1,8,1]
];
console.log(sessionList(arr));


/****
 * 
 * 以下是处理输入部分
 * 
 */

let dataInit = readline().split(' ');
let numN = parseInt(dataInit[0]);

let dataList = [];
let tempN,tempList,tempData;
for(let i=0;i<numN;i++){
    tempN = parseInt(readline().split(' ')[0]);
    tempList = [];
    tempData = readline().split(' ');
    for(let j=0;j<tempN;j++){
        tempList.push(parseInt(tempData[j]));
    }
    dataList.push(tempList);
}
let handledData = sessionList(dataList);
for(let k=0;k<handledData.length;k++){
    print(handledData[k].join(' '));
}

