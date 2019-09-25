function allWaysofOut(numN){
    let maxD=1000;
    let store=[];
    store[0]=1;
    store[1]=0;
    for(let i=2;i<=maxD;i++){
        store[i]=0;
    }
    for(let i=0;i<=maxD;i++){
        let temp = 1;
        while(temp<=i){
            store[i]+=store[i-temp];
            temp*=2;
            store[i]%= Math.pow(10,9)+3;
        }
    }
    return store[numN];
}

let numN = 100;
console.log(allWaysofOut(numN));


// 混合处理及提交版本


function allWaysofOut(numNs){
    let maxD=1000;
    let store=[];
    store[0]=1;
    store[1]=0;
    for(let i=2;i<=maxD;i++){
        store[i]=0;
    }
    for(let i=0;i<=maxD;i++){
        let temp = 1;
        while(temp<=i){
            store[i]+=store[i-temp];
            temp*=2;
            store[i]%= Math.pow(10,9)+3;
        }
    }
    let outputs=[];
    for(let i=0;i<numNs.length;i++){
        outputs.push(store[numNs[i]]);
    }
    return outputs;
}


let m = parseInt(readline());
let count=0;
let datas=[];
while(count<m){
    let numN=parseInt(readline());
    datas.push(numN);
    count++;
}
let res = allWaysofOut(datas);
for(let i=0;i<res.length;i++){
    print(res[i]);
}