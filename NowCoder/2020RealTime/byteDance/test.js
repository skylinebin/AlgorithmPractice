function maxHeightofList(data){
    let maxHeight = 0;
    if(!data || data.length === 0){
        return maxHeight;
    }
    let len = data.length;
    let copyArr = data.slice(0);
    copyArr.sort((a,b)=>a-b);
    let maxMid = Math.abs(copyArr[data.length-1]-copyArr[0]);
    maxHeight = maxMid;
    let states = [];

    this.dfs = function(N,total, num, data){
        if(total === len){
            if(Math.abs(data[num]-data[0])<=N){
                if(N<maxHeight){
                    maxHeight = N;
                    return maxHeight;
                }
            }
            return;
        } else {
            for(let j=0;j<len;j++){
                if(!states[j] && Math.abs(data[num]-data[j])<=N){
                    states[j] = true;
                    this.dfs(N,total+1,j,data);
                    states[j] = false;
                }
            }
        }
    }
    states[0]=true;
    for(let k=0;k<=maxMid;k++){
        this.dfs(k,1,0,data);
    }
    // return maxHeight;
}

let data = [100,103,98,105];
console.log(maxHeightofList(data));