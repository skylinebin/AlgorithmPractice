/*
 * @Author: SkylineBin 
 * @Date: 2019-08-04 16:26:44 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-04 18:06:00
 */


function processData(dataA,dataB){
    let output = [];
    dataA.map((a)=>parseInt(a));
    dataB.map((a)=>parseInt(a));
    dataA.sort((a,b)=>a-b);
    dataB.sort((a,b)=>a-b);
    output = [...dataA,...dataB];
    let only = [...new Set(output)];
    only.sort((a,b)=>a-b);
    return only.join(' ');
    // return [...new Set(output)].sort((a,b)=>a-b).join(' ');
}



// let dataA = [11, 18, 42, 47, 56, 64, 69, 75, 79, 81, 87, 95, 97, 106, 118, 122, 124, 125, 127, 136, 145, 148, 156, 175];
// let dataB = [3, 5, 18, 22, 25, 37, 41, 43, 50, 52, 60, 76, 83, 103, 114, 118, 120, 132, 133, 134, 147, 161];
let dataA = strone.split(' ');
let dataB = strtwo.split(' ');

console.log(processData(dataA,dataB));



function processData2(dataA,dataB){
    let output = [];
    dataA = dataA.map((a)=>parseInt(a));
    dataB = dataB.map((a)=>parseInt(a));
    // dataA.sort((a,b)=>a-b);
    // dataB.sort((a,b)=>a-b);
    output = [...dataA,...dataB];
    let only =Array.from(new Set(output));
    only.sort((a,b)=>a-b);
    return only.join(' ');
}


// 错误的读取方式
// ACMCODER JavaScript 处理过程一次read_line()只能读取 1024 个字符，需要使用 readInt() 来读取指定个数字
let data,aB,numA,numB,dataA,dataB;
while(data=read_line()){
	aB = data.split(' ');
    if(aB.length===2){
        numA = parseInt(aB[0]);
        numB = parseInt(aB[1]);
        dataA = read_line().trim().split(' ');
        dataB = read_line().trim().split(' ');
        print(processData2(dataA,dataB));
    }
}


// 正确的读取方式

let data,aB,numA,numB,dataA,dataB;
while(data=read_line()){
	aB = data.split(' ');
    if(aB.length===2){
        numA = parseInt(aB[0]);
        numB = parseInt(aB[1]);
        dataA = [];
        // 确定多少数字，就读多少数字
        while(numA>0){
            dataA.push(readInt());
            numA--;
        }
        dataB = [];
        while(numB>0){
            dataB.push(readInt());
            numB--;
        }
        print(processData(dataA,dataB));
    }
}