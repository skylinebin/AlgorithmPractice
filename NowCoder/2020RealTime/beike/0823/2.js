function maxUsM(n,S,c){
    let count=0,sum=0;
    c.sort((a,b)=>a-b);
    for(let i = 0; i < c.length; i++) {
        sum+=c[i];
        if(sum<S){
            count++;
        }else{
            break;
        }
    }
    return count;
}


let n=readInt();
let S=readInt();
let c=[];
for (let i = 0; i < n; i++) {
    c.push(readInt());
}

print(maxUsM(n,S,c))








let n = 5,S=10;
let c=[3,9,5,7,6];
console.log(maxUsM(n,S,c));