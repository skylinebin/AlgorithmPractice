function strCycle(sArr,nArr){
    let output=[];
    function cycleStr(str,num){
        if(num===0){
            return str;
        }else{
            let tstr= str.substring(str.length-1,str.length)+str.substring(0,str.length-1);
            return cycleStr(tstr,num-1);
        }
    }
    for (let i = 0; i < sArr.length; i++) {
        output.push(cycleStr(sArr[i],nArr[i]));
    }
    return output;
}

let num = readInt();
let sArr=[];
let nArr=[];
let count=0;
while(count<num){
    let tStr=String(read_line());
    sArr.push(tStr);
    let tN = readInt();
    nArr.push(tN);
    count+=1;
}
let res = strCycle(sArr,nArr);
for (let i = 0; i < res.length; i++) {
    print(res[i]);
}


// let sArr=["abcd","qwer"];
// let nArr=[2,4];

console.log(strCycle(sArr,nArr));



