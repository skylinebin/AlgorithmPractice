function maxNums(n,m,arrs){
    let count=0,sum=0;
    let len=arrs.length;
    for (let i = 0; i < len; i++) {
        let tempD = arrs[i];
        let tC=0;
        while(tC<tempD[0]){
            if(m-sum>=tempD[1]){
                sum+=tempD[1];
                count++;
            }
            tC++;
        }
    }
    return count;
}




let n=readInt();
let m=readInt();
let arrs=[];
for (let i = 0; i < n; i++) {
    arrs[i]=[];
    arrs[i].push(readInt());
    arrs[i].push(readInt());
}

print(maxNums(n,m,arrs));



let n = 4;
let m = 100;
let arrs=[
    [3,40],
    [3,6],
    [1,1],
    [1,5]
];
console.log(maxNums(n,m,arrs));