function minChangeTimes(num,arrA,arrB){
    var minTimes=Number.MAX_VALUE;
    if(num==1&&arrA[0]===arrB[0]){
        return 0;
    }

    var dp=[];
    for (let j = 0; j < num; j++) {
        dp[j]=0;
    }
    var temp;
    for (let i = 0; i < num; i++) {
        temp=Number.MAX_VALUE;
        for (let k = 0; k < num; k++) {
            temp = Math.min(temp,dp[k]);
            dp[k]=Math.abs(k-arrB.indexOf(arrA[k]))+temp;
        }
    }

    return dp[num-1];
}


var num;
while(num=readInt()){
    var arrA=[];
    var arrB=[];
    var count=0;
    while(count<num){
        arrA.push(readInt());
        count++;
    }
    count=0;
    while(count<num){
        arrB.push(readInt());
        count++;
    }
    print(minChangeTimes(num,arrA,arrB));
}



// for (let i = 0; i < num; i++) {
//     minTimes = Math.min(minTimes,dp[i]);
// }


function sameCheck(arrayA,arrayB){
    return arrayA.every((a,index)=>a===arrayB[index]);
}





var num=4;
var arrA=[4,2,1,3];
var arrB=[3,2,4,1];

console.log(minChangeTimes(num,arrA,arrB));