function findMinSteps(datas){
    let minS = Number.MAX_VALUE;
    let len = datas.length;
    if(!len||len===0){
        return 0;
    }
    if(len===1){
        return 0;
    }
    let state=false;
    function dfs(index,count){
        if(index<len-1){
            dfs(index+datas[index],count+1);
        }else if(index===len-1){
            if(count<minS){
                state=true;
                minS=count;
            }
        }
    }
    
    for(let i=1;i<parseInt(len/2);i++){
        dfs(i,1);
    }
    if(state){
        return minS;
    }else{
        return -1;
    }
    
}



let datas=readline().split(' ');
datas=datas.map((a)=>parseInt(a));
print(findMinSteps(datas));