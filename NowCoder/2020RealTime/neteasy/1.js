function maxNum(numA,numB){
    if(numB === 0){
        return numA;
    }else {
        return maxNum(numB, numA % numB);
    }
}




let numA = 7951346523609888
let numB =6998915114363550;
console.log(maxNum(numA,numB));