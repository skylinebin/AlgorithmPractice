function leastAddNum(numN,numX,datas){
    let current = datas.indexOf(numX);
    datas.sort((a,b)=>a-b);
    console.log(datas);
    let len = datas.length;
    if(current<parseInt((len-1)/2)){
        if(current%2 === len%2){
            return len-current-1-current;
        }else{
            return len-current-1-current-1;
        }
        
    }else if(current>parseInt((len-1)/2)){
        if(current%2 === len%2){
            return 2*current+1-len-1;
        }else{
            return 2*current+1-len;
        }
    }else{
        return 0;
    }
}


let datas=[67, 94, 59, 4, 20, 4, 6, 81, 26, 27];
let numN = 10;
let numX = 96;


function leastAddNum2(numN,numX,datas){
    datas.sort((a,b)=>a-b);
    let cMid = parseInt((numN-1)/2);
    let left=0,right=0,count=0;
    for (let i = 0; i < numN; i++) {
        if(datas[i]===numX){
            count++;
        }else if(datas[i]<numX){
            left++;
        }else if(datas[i]>numX){
            right++;
        }
    }
    if(left<=cMid){
        if(cMid<numN-right){
            return 0;
        }else{
            return right-left-count;
        }
    }else{
        return left-(right+count-1);
    }
}

console.log(leastAddNum2(numN,numX,datas));