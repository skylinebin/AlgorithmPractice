function findAnswer(numN,numQ,dataInit,ques){
    let countArr = [];
    for (let j = 0; j < ques.length; j++) {
        let count = 0;
        for (let i = 0; i < dataInit.length; i++) {
            if(dataInit[i]>=ques[j]){
                dataInit[i]-=1;
                count++;
            }            
        }
        countArr.push(count);
    }
    return countArr;
}

let numN=4,numQ=3,dataInit=[1,2,3,4],ques=[4,3,1];
console.log(findAnswer(numN,numQ,dataInit,ques));


// 4 3
// 1 2 3 4
// 4
// 3
// 1


for(let j=0;j<outside.length;j++){
    if(outside[j]){
        print(outside[j]);
    }
}

for(let j=0;j<numQ;j++){
    temp = parseInt(readline());
    ques.push(temp);
}
