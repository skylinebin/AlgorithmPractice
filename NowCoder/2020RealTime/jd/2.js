function sortNames(arr){
    let output=[];
    let copyArr=arr.slice();
    let counter=new Map();
    for (let i = 0; i < copyArr.length; i++) {
        let temp = copyArr[i].split(' ');
        if(counter.get(temp[0])){
            counter.set(temp[0],counter.get(temp[0])+1);
        }else{
            counter.set(temp[0],1);
        }
    }
    let store=[];
    for(let [key,value] of counter){
        store.push([key,value]);
    }
    store.sort((a,b)=>b[1]-a[1]);
    let sDatas = [];
    let tempSData = [store[0][0]];
    for (let i = 1; i < store.length; i++) {
        if(store[i][1]===store[i-1][1]){
            let tempA=tempSData.concat(store[i][0]);
            if(i===store.length-1){
                sDatas.push(tempA);
            }
        }else{
            sDatas.push(tempSData.slice());
            tempSData=[store[i][0]];
        }
    }
    for (let j = 0; j < sDatas.length; j++) {
        let tempD = sDatas[j];
        for (let q = 0; q < copyArr.length; q++) {
            let temp = copyArr[q].split(' ');
            if(tempD.indexOf(temp[0])!==-1){
                output.push(copyArr[q]);
            }
        }
    }
    return output;
}


let arr=[
    "ZHANG SAN",
    "LI SI",
    "WANG WU",
    "WANG LIU",
    "WANG QI",
    "ZHANG WU",
    "LI WU"
];
console.log(sortNames(arr));