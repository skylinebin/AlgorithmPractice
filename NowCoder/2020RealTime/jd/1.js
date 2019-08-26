function countMinTimes(n,str){
    let count=0;
    function isLittle(s){
        if(s>="a"&&s<="z"){
            return true;
        }else{
            return false;
        }
    }
    let onceC=1;
    for(let i=0;i<n;i++){
        if(!isLittle(str[i])){
            onceC++;
        }else{
            onceC+=2;
        }
    }
    let twiceC=0;
    for(let i=0;i<n;i++){
        if(i!=0&&(isLittle(str[i])===isLittle(str[i-1]))){
            twiceC++;
        }else if(i!==0 &&(!isLittle(str[i])) &&(isLittle(str[i])!==isLittle(str[i-1]))){
            twiceC+=2;
        }else if(i!==0 &&(isLittle(str[i])) &&(isLittle(str[i])!==isLittle(str[i-1]))){
            twiceC+=1;
        }else if(i===0 &&(isLittle(str[i]))){
            twiceC++;
        }else if(i===0 &&(!isLittle(str[i]))){
            twiceC+=2;
        }
    }
    count=Math.min(onceC,twiceC);
    return count;
}

function countMinTimes(n,str){
    let count=0;
    // let copyBigStr = str.toUpperCase();
    // let copyLittleStr = str.toLowerCase();
    // console.log(copyBigStr,copyLittleStr);
    function isLittle(s){
        if(s>="a"&&s<="z"){
            return true;
        }else{
            return false;
        }
    }
    // let bC=0,lC=0;
    // for (let k = 0; k < n; k++) {
    //     if(str[k]!==copyBigStr[k]){
    //         bC++;
    //     }
    //     if(str[k]!==copyLittleStr[k]){
    //         lC++;
    //     }
    // }

    // if(bC>lC){
    //     for (let j = 0; j < n; j++) {
            
            
    //     }


    // }else{
    //     count+=1;
    //     for(let i=0;i<n;i++){
    //         if(!isLittle(str[i])){
    //             count++;
    //         }else{
    //             count+=2;
    //         }
    //     }
    // }

    let onceC=1;
    for(let i=0;i<n;i++){
        if(!isLittle(str[i])){
            onceC++;
        }else{
            onceC+=2;
        }
    }
    let twiceC=0;
    for(let i=0;i<n;i++){
        if(i!=0&&(isLittle(str[i])===isLittle(str[i-1]))){
            twiceC++;
        }else if(i!==0 &&(!isLittle(str[i])) &&(isLittle(str[i])!==isLittle(str[i-1]))){
            twiceC+=2;
        }else if(i!==0 &&(isLittle(str[i])) &&(isLittle(str[i])!==isLittle(str[i-1]))){
            twiceC+=1;
        }else if(i===0 &&(isLittle(str[i]))){
            twiceC++;
        }else if(i===0 &&(!isLittle(str[i]))){
            twiceC+=2;
        }
    }
    let thirdC=0;
    for(let i=0;i<n;i++){
        if(isLittle(str[i])){
            thirdC++;
        }else if(!isLittle(str[i])){
            twiceC+=2;
        }
    }
    count=Math.min(onceC,twiceC);
    count=Math.min(count,thirdC);
    return count;
}



let n=6;
let str="AaAAAA";
console.log(countMinTimes(n,str));