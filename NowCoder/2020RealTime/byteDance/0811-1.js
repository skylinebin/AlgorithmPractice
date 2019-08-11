function findWaysSum(numN,arr){
    let output = [0,0,0];
    let store = [];
    for (let i = 0; i < numN; i++) {
        store[i]=[];
        for (let j = 0; j < numN; j++) {
            store[i][j]=0;
        }
    }
    for (let k = 0; k < arr.length; k++) {
        let tempArr = arr[k];
        store[tempArr[0]-1][tempArr[1]-1]=1;
        store[tempArr[1]-1][tempArr[0]-1]=1;
    }
    for (let i = 0; i < numN; i++) {
        for (let j = i+1; j < numN; j++) {
            if(store[i][j]===0){
                store[i][j]=findminPath(i,j);
            }
            addToSum(store[i][j]);
        }
    }

    function findminPath(a,b){
        if(store[a][b]!==0){
            return store[a][b];
        }else{
            if(store[a].indexOf(1)!==-1){
                let c = store[a].indexOf(1);
                return 1+findminPath(c,b);
            }else if(store[b].indexOf(1)!==-1){
                let c = store[b].indexOf(1);
                return 1+findminPath(c,a);
            }else{
                return 0;
            }
        }
    }

    function addToSum(len){
        if(len%3==0){
            output[0]+=len;
        }else if(len%3==1){
            output[1]+=len;
        }else if(len%3==2){
            output[2]+=len;
        }
    }
    let maxValue = Math.pow(10,9)+7;
    for (let i = 0; i < output.length; i++) {
        if(output[i]>maxValue){
            output[i]= output[i]%maxValue;
        }
    }
    return output.join(' ');
}

// let numN = parseInt(readline());
// let arr = [];
// let count=1;
// while(count<numN){
//     let temp = readline().split(' ');
//     arr.push([parseInt(temp[0]),parseInt(temp[1])]);
//     count++;
// }
// print(findWaysSum(numN,arr));


let numN=3;
let arr = [
    [1,2],
    [2,3]
];
console.log(findWaysSum(numN,arr));