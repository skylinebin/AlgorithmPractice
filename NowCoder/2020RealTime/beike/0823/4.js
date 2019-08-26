function maxSub(n,things){
    let sum=0,maxS=0,minS=0;
    things.sort((a,b)=>a-b);
    sum = things.reduce((a,b)=>a+b,0);
    let left=sum,right=0;
    let len=things.length;
    for (let k = len-1; k >=0; k--) {
        let tS = Math.abs(left-right);
        right+=things[k];
        left-=things[k];
        if(Math.abs(left-right)>tS){
            minS=tS;
            maxS = len-k-1;
            break;
        }
    }
    return [minS,maxS].join(" ");
}



// let n=readInt();
// let things=[];
// for (let i = 0; i < n; i++) {
//     things.push(readInt());
// }
// print(maxSub(n,things))


// let n=6;
// let things=[1,2,3,4,5,6];
// console.log(maxSub(n,things));







function maxSub2(n,things){
    let sum=0,maxS=0,minS=0;
    let sumLeft=0,sumRight=0;
    let len=things.length;
    let left=0,right=len-1;
    while(left<=right){
        if(sumLeft<sumRight){
            sumLeft+=things[left];
            left++;
        }else{
            sumRight+=things[right];
            right--;
        }
    }
    minS= Math.abs(sumLeft-sumRight);
    maxS = Math.abs((len - right) - (left + 1));
    return [minS,maxS].join(" ");
}

let n=6;
let things=[1,2,3,4,5,6];
console.log(maxSub2(n,things));