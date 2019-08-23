function findWays(n){
    if(n===1||n===2){
        return n;
    }else{
        return findWays(n-1)+findWays(n-2);
    }
}

// let n=parseInt(readline());
// print(findWays(n));

let n=9;
console.log(findWays(n));