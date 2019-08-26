function findDicSort(numN,data){
    let output;
    output = data.slice(0);
    let tempState = data[0]%2===0?true:false;
    for (let i = 1; i < numN; i++) {
        if(data[i]%2===0 && !tempState){
            return output.sort((a,b)=>a-b);
        }
    }
    return output;
}

let numN = 10;
let data = [53941, 38641, 31525, 75864, 29026, 12199, 83522, 58200, 64784, 80987];
console.log(findDicSort(numN,data));
