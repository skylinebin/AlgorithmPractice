
/*****
 * 
 * 零食问题，最大满意度
 * 
 * 
 * 
 */


function processData(numN,numT,dataN){
    let maxV = numT;
    let arrV = [];
    let arrL = [];
    dataN.sort((a,b)=>b[1]-a[1]);
    for (let i = 0; i < numN; i++) {
        arrV.push(dataN[i][0]);
        arrL.push(dataN[i][1]);
        let count = dataN[i][2];
        while(count>1){
            arrV.push(dataN[i][0]);
            arrL.push(dataN[i][1]);
            count--;
        }
    }
    let maxLength = arrV.length;
    let dp = [];
    for (let j = 0; j <=maxLength; j++) {
        dp[j]=[];
        dp[j][0]=0;
    }
    for (let k = 0; k <= maxLength; k++) {
        for (let w = 0; w <= maxV; w++) {
            if (k == 0 || w == 0) {
                dp[k][w] = 0;
            } else if (arrV[k - 1] <= w) {
                a = arrL[k - 1] + dp[k - 1][w - arrV[k - 1]];
                b = dp[k - 1][w];
                dp[k][w] = (a > b) ? a : b;
            } else {
                dp[k][w] = dp[k - 1][w];
            }
        }
    }
    return dp[maxLength][maxV];
}

let numN=3,numT=100;
let dataN=[
    [26,100,4],
    [5,1,4],
    [5,2,2]
];
console.log(processData(numN,numT,dataN));













// function solution(arr1, arr2, arr3) {

//     var sum = arr1[0];

//     var maxValue;

//     maxValue = 0;
//     var i, w, a, b, kS = [];

//     let maxLength = arr2.length;

//     for (let i = 0; i <= arr2.length; i++) {
//         kS[i] = [];
//     }

//     for (let j = 0; j <= maxLength; j++) {
//         for (let w = 0; w <= sum; w++) {
//             if (j == 0 || w == 0) {
//                 kS[j][w] = 0;
//             } else if (arr2[j - 1] <= w) {
//                 a = arr3[j - 1] + kS[j - 1][w - arr2[j - 1]];
//                 b = kS[j - 1][w];
//                 kS[j][w] = (a > b) ? a : b;
//             } else {
//                 kS[j][w] = kS[j - 1][w];
//             }
//         }
//     }

//     maxValue = kS[maxLength][sum];

//     return maxValue;

// }


let initdata,numN,numT,temp;
while(initdata= read_line()){
    initdata = initdata.split(' ');
	numN = parseInt(initdata[0]);
	numT = parseInt(initdata[1]);
    let temp = numN;
    let dataN = [];
    while(temp>0){
        let tempC = []
        tempC.push(readInt());
        tempC.push(readInt());
        tempC.push(readInt());
        dataN.push(tempC);
        temp--;
    }
    print(processData(numN,numT,dataN))
}