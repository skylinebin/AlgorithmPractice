function maxNumberofMeeting(numN,numAs,numU,numV){
    let start=numU;
    let end = numV;
    let time=1;
    let count=0;
    function checkIf(num,s){
        let startN=start;
        let endN = end;
        let ts = s+num;
        if(ts>numN){
            ts=ts-numN;
        }
        if(startN<=ts&&endN>ts){
            return true;
        }else{
            return false;
        }
    }
    for(let s=1;s<=numN;s++){
        let tCount=0;
        for(let i=0;i<numN;i++){
            if(checkIf(i,s)){
                tCount+=numAs[i];
            }
        }
        if(tCount>count){
            time=s;
            count=tCount;
        }
    }

    return time;
}

let numN=3;
let numAs=[2,5,6];
let numU=1;
let numV=3;
console.log(maxNumberofMeeting(numN,numAs,numU,numV));