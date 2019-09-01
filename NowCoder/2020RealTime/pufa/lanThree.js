function countTimes(n){
    if(n===1){
        return 0;
    }else{
        if(n%2===0){
            n=n/2;
        }else{
            n=((n*3)+1)/2;
        }
        return 1+countTimes(n);
    }
}

let n =28;
console.log(countTimes(n));