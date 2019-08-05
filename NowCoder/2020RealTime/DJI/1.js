/******
 * 
 * 喝咖啡增加效率
 * 
 * 
 * 
 */



function processData(numN,numA,numX,dataN){
    let count=0;
    let k=0;
    let time = 60;
    for (let i = 0; i < numN; i++) {
        let temp = Math.ceil(parseInt(dataN[i])/numA);
        if(k<=numX){
            if(temp <= time && time<=60){
                time = time - temp;
                count+= temp;
            }else if(temp<=60 && time < temp) {
                time = 60;
                k++;
                time = time - temp;
                count+= temp;
            }else{
                let t = (temp/60) + 1;
                k+=t;
                time = 60 - (temp%60);
                if(k<=numX){
                    count+= temp;
                }else {
                    count+= dataN[i];
                }
                
            }
        }else{
            count+= dataN[i];
        }

    }
    return Math.ceil(count);
}


function processData2(numN,numA,numX,dataN){
    let count=0;
    let allTime = numX*60;
    let max=allTime*numA;
    let fir=0,sec=0;
    for (let i = 0; i < numN; i++) {
        if(dataN[i]<=max){
            fir += dataN[i];
            max -= dataN[i];
        }else{
            fir+=max;
            sec+=dataN[i]-max;
            max=0;
        }
    }
    count = Math.ceil(fir/numA);
    count+=sec;
    return count>480?0:count;
}



let numN=8,numA=2,numX=8;
let dataN = [60, 60, 60, 60, 60, 60, 60, 60];
// let numN=4,numA=3,numX=3;
// let dataN = [333, 77, 100, 13];

console.log(processData2(numN,numA,numX,dataN));



// let initdata,numN,numA,numX,temp;
// while(initdata= read_line()){
//     initdata = initdata.split(' ');
// 	numN = parseInt(initdata[0]);
// 	numA = parseInt(initdata[1]);
// 	numX = parseInt(initdata[2]);
//     let temp = numN;
//     let dataN = [];
//     while(temp>0){
//         dataN.push(readInt());
//         temp--;
//     }
//     print(processData(numN,numA,numX,dataN))
// }