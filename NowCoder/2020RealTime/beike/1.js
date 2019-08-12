function findMinData(numN,arr){
    let output = [];
    if(arr.length!==numN || numN<=2){
        return ""
    }
    function decNum(a,b){
        let numa = BigInt(a);
        let numb = BigInt(b);
        let result = numa-numb;
        result = String(result);
        return Math.abs(result);

    }
    let min = decNum(arr[0],arr[1]);
    output.push(arr[0]);
    output.push(arr[1]);

    for(let i=2;i<numN;i++){
        let temp = decNum(arr[i],arr[i-1]);
        if(temp < min){
            min = temp;
            output[0]= arr[i-1];
            output[1]= arr[i];
        }
    }
    return output.join(' ');
}

let numN = 9;
let arr =[1, 3, 4, 7, 2, 6, 5, 12, 32];
console.log(findMinData(numN,arr));
