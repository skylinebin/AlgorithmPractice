function findLongLen(numN,arr){
    let max=0;
    
    function dfs(index,tempArr,arr){
        let tArr = tempArr.slice();
        if(index===numN){
            if(tempArr.length>max){
                max=tempArr.length;
            }
            return;
        }else{
            if(tArr.length===0){
                tArr.push(arr[index]);
                let misArr = tArr.concat();
                dfs(index+1,misArr,arr);
            }else{
                if(arr[index]>tArr[tArr.length-1]){
                    let misArr = tArr.concat();
                    misArr.push(arr[index]);
                    dfs(index+1,misArr,arr);
                }
                    dfs(index+1,tArr,arr);
            }
        }
    }
    for(let i=0;i<numN;i++){
        let tempArr = [];
        dfs(i,tempArr,arr);
    }
    return max;
}

// DFS的思想
function findLongLen2(numN,arr){
    let max=0;
    
    function dfs(index,tempArr,arr){
        if(index===numN){
            if(tempArr.length>max){
                max=tempArr.length;
            }
            return;
        }else{
            if(tempArr.length===0){
                tempArr.push(arr[index]);
                dfs(index+1,tempArr,arr);
            }else{
                if(arr[index]>tempArr[tempArr.length-1]){
                    tempArr.push(arr[index]);
                    dfs(index+1,tempArr,arr);
                }
                    dfs(index+1,tempArr,arr);
            }
        }
    }
    for(let i=0;i<numN;i++){
        let tempArr = [];
        dfs(i,tempArr,arr);
    }
    return max;
}


let num = 8;
let arr=[5,1,6,8,2,4,5,10];
// console.log(findLongLen(num,arr));


console.time('findMinData');
console.log(findLongLen(num,arr)); // 3.038ms
console.timeEnd('findMinData');


// 动态规划的思想
function LISUsingDP(arr){
    if(arr.length<=1){
        return arr.length;
    }
    let max=0;
    let fs=[];
    fs[0]=1;
    for (let i = 1; i < arr.length; i++) {
        fs[i]=1;
        for (let j = 0; j < i; j++) {
            if(arr[i]>arr[j]){
                fs[i] = Math.max(fs[j]+1,fs[i]);
            }
        }
    }
    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, fs[k]);
    }
    return max;
}

console.time('LISUsingDP');
console.log(LISUsingDP(arr)); // 0.457ms
console.timeEnd('LISUsingDP');



// 二分查找的思路  

function LISbyBinSearch(arr){
    let mList = [];
    mList[0]=Number.MAX_VALUE;
    for (let i = 1; i <= arr.length; i++) {
        mList[i] = Number.MAX_VALUE;
    }
    function binSearch(list,item){
        let start=0,end=list.length-1;
        while(start<end-1){
            let middle = Math.floor(start+(end-start)/2);
            if(list[middle]<item){
                start=middle;
            }else{
                end=middle;
            }
        }
        return end;
    }
    for (let j = 0; j < arr.length; j++) {
        let index = binSearch(mList,arr[j]);
        mList[index]=arr[j];
    }
    // console.log(mList);
    for (let k = mList.length-1; k >0; k--) {
        if(mList[k]!==Number.MAX_VALUE){
            return k;
        }
    }
    return 1;
}

console.time('LISbyBinSearch');
console.log(LISbyBinSearch(arr)); // 0.472ms
console.timeEnd('LISbyBinSearch');