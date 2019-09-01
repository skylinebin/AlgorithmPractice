function maxLengthofSub(str){
    let max=1;
    if(!str||str.length===0){
        return 0;
    }
    for(let i=0;i<str.length-1;i++){
        for(j=i+1;j<str.length;j++){
            let temp=str.substring(i,j);
            if(temp.indexOf(str[j])===-1){
                max=Math.max(j-i+1,max);
            }else{
                break;
            }
        }
    }
    return max;
}


let str = readline();
print(maxLengthofSub(str));