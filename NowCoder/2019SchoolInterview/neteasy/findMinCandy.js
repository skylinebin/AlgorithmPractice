/*
 * @Author: SkylineBin 
 * @Date: 2019-08-03 14:35:16 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-03 14:35:55
 */



function findMinCandy(numN,numM,person){
    let minCandy=0;
    let store = {};
    let max=0;
    for(let i=0;i<numN;i++){
        let tempN = person[i][0];
        if(!store.get(tempN)){
            store.set(tempN,1);
        }else{
            store.set(tempN,store.get(tempN)+1);
            if(store.get(tempN)>max){
                max = store.get(tempN);
            }
        }
    }
    
    
}









let inits = readline().split(' ');
let numN = parseInt(inits[0]);
let numM = parseInt(inits[1]);

let person = [],temp;
for(let i=0;i<numN;i++){
    temp = readline().split(' ');
    person.push([parseInt(temp[0]),parseInt(temp[1])]);
}

print(findMinCandy(numN,numM,person));