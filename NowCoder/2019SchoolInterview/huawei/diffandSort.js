/*
 * @Author: SkylineBin 
 * @Date: 2019-08-07 16:38:53 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-07 16:44:14
 */


function diffandSort(arr){
    let afterArr=[];
    for(let j=0;j<arr.length;j++){
        if(afterArr.indexOf(arr[j])===-1){
            afterArr.push(arr[j]);
        }
    }
    afterArr.sort((a,b)=>a-b);
    return afterArr;
}

let numN;
while(numN=readline()){
    numN = parseInt(numN);
    let arr = [];
    let temp;
    for(let i=0;i<numN;i++){
        temp = parseInt(readline());
        arr.push(temp);
    }
    let after = diffandSort(arr);
    for(let i=0;i<numN;i++){
        if(after[i]){
            print(after[i]);
        }
    }
}
