function changeStr(strs,num){
    return strs.slice(strs.length-num,strs.length)+strs.slice(0,strs.length-num);
}

let inits=readline().split(' ');
let N = parseInt(inits[0]);
let T = parseInt(inits[1]);
let strs=readline();
let count=0;
while(count<T){
    let temp=readline().split(' ');
    if(temp[0]==='1'){
        strs=changeStr(strs,temp[1]);
    }else if(temp[0]==='2'){
        print(strs[parseInt(temp[1])]);
    }
    count++;
}